import { useEffect, useState } from 'react';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import useCaver from '@hooks/useCaver';
import { NFT_ABI } from '@hooks/useABI';
import { NFTStorage } from 'nft.storage';
import axios from 'axios';

const NFT_ADDR = process.env.REACT_APP_CYPRESS_NFT_ADDR;

export default function useNFT() {
  const { caver } = useCaver();
  const { account, walletType } = useRecoilValue(userState);

  const [myNFTAll, setMyNFTAll] = useState([]);
  const [myNFTInProgress, setMyNFTInProgress] = useState([]);
  const [myNFTNotInProgress, setMyNFTNotInProgress] = useState([]);

  const [myNFTBalance, setMyNFTBalance] = useState(0);
  const client = new NFTStorage({
    token: process.env.REACT_APP_NFTSTORAGE_API,
  });

  async function createTokenURI(_nftImage, _nftName, _nftDesc, _nftExternalLink) {
    const fileCid = await client.storeBlob(new Blob([_nftImage]));
    const obj = {
      name: _nftName,
      description: _nftDesc,
      image: 'https://ipfs.io/ipfs/' + fileCid,
      external_link: _nftExternalLink,
    };
    const metadataCid = await client.storeBlob(new Blob([JSON.stringify(obj)]));

    return 'https://ipfs.io/ipfs/' + metadataCid;
  }

  async function mintNFT(_tokenURI) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(NFT_ABI, NFT_ADDR, {
        from: account,
      });

      await myContract.methods
        .mintNFT(_tokenURI)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  async function burnNFT(_tokenId) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(NFT_ABI, NFT_ADDR, {
        from: account,
      });

      await myContract.methods
        .burnNFT(_tokenId)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  useEffect(() => {
    async function getMyNFTList() {
      if (walletType === 'Kaikas') {
        const myContract = await new caver.klay.Contract(NFT_ABI, NFT_ADDR, {
          from: account,
        });

        const _myTokens = await myContract.methods
          .getMyNFTs()
          .call({ from: account });

        const _tokens = await Promise.all(
          _myTokens.map(async (i) => {
            let metadata = await axios.get(i.nftURI);
            let token = {
              tokenId: Number(i.nftId),
              tokenURI: i.nftURI,
              tokenImage: metadata.data.image,
              tokenName: metadata.data.name,
              tokenDesc: metadata.data.description,
              tokenIsListing: Boolean(i.isListing)
            };
            return token;
          }),
        );


        const inProgress = _tokens.filter((token) => token.tokenIsListing === true);
        const notInProgress = _tokens.filter((token) => token.tokenIsListing === false);
        setMyNFTInProgress(inProgress);
        setMyNFTNotInProgress(notInProgress);
        setMyNFTAll(_tokens);
      }
    }

    getMyNFTList();
  }, [account, walletType, caver]);

  useEffect(() => {
    async function getMyNFTBalance() {
      if (walletType === 'Kaikas') {
        const myContract = await new caver.klay.Contract(NFT_ABI, NFT_ADDR, {
          from: account,
        });

        await myContract.methods
          .balanceOf(account)
          .call({ from: account })
          .then((result) => setMyNFTBalance(result));
      }
    }

    getMyNFTBalance();
  }, [account, walletType, caver]);

  return {
    createTokenURI,
    mintNFT,
    burnNFT,
    myNFTAll,
    myNFTInProgress,
    myNFTNotInProgress,
    myNFTBalance,
  };
}
