import { useState, useEffect } from 'react';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import useCaver from '@hooks/useCaver';
import Caver from 'caver-js';
import { RAFFLE_ABI } from '@hooks/useABI';
import axios from 'axios';

const RAFFLE_ADDR = process.env.REACT_APP_CYPRESS_RAFFLE_ADDR;

export default function useRaffleLayer1() {
  const { caver } = useCaver();
  const { account, walletType } = useRecoilValue(userState);

  const [presentRaffleLayer1, setPresentRaffleLayer1] = useState([]);
  const [pastRaffleLayer1, setPastRaffleLayer1] = useState([]);

  async function setRaffleLayer1(
    _tokenId,
    _endDate,
    _ticketLimit,
    _ticketPrice,
  ) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );
      // BigNumber 대신 string 형태로 넣어줌
      const _tokenValue = String(_ticketPrice * 10 ** 18);
      await myContract.methods
        .setRaffleLayer1(_tokenId, _endDate, _ticketLimit, _tokenValue)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  async function joinRaffleLayer1(
    _tokenId,
    _numberOfTickets,
    _tokenTicketPrice,
  ) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      const _tokenValue = String(_numberOfTickets * _tokenTicketPrice);

      await myContract.methods
        .joinRaffleLayer1(_tokenId, _numberOfTickets)
        .send({ from: account, gas: 0xf4240, value: _tokenValue });
    }
  }

  // only contract owner
  async function drawRaffleLayer1(_tokenId) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      const _forRandomNumValue = String(0.5 * 10 ** 18);

      await myContract.methods
        .drawRaffleLayer1(_tokenId)
        .send({ from: account, gas: 0xf4240, value: _forRandomNumValue });
    }
  }

  // only contract owner
  async function announcementWinnerLayer1(_tokenId) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .announcementWinnerLayer1(_tokenId)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  // only contract owner
  async function deleteRaffleLayer1(_tokenId) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .deleteRaffleLayer1(_tokenId)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  useEffect(() => {
    async function getAllRaffleLayer1() {
      const _caver = new Caver('https://public-en-cypress.klaytn.net/');
      const myContract = await new _caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: process.env.REACT_APP_CONTRACT_OWNER_ADDR,
        },
      );

      const _presentTokens = await myContract.methods
        .getAllRaffleLayer1(true)
        .call({ from: process.env.REACT_APP_CONTRACT_OWNER_ADDR });

      const _organizePresentTokens = await Promise.all(
        _presentTokens.map(async (i) => {
          let metadata = await axios.get(i.nftURI);
          let token = {
            tokenId: Number(i.nftId),
            tokenURI: i.nftURI,
            tokenImage: metadata.data.image,
            tokenName: metadata.data.name,
            tokenDesc: metadata.data.description,
            tokenStatus: i.status,
            tokenOwner: i.owner,
            tokenEndDate: i.endDate,
            tokenTicketSupply: i.ticketLimit,
            tokenTicketPrice: i.ticketPrice,
            tokenParticipatedList: i.participatedList,
            tokenWinner: i.winner,
          };
          return token;
        }),
      );

      const _pastTokens = await myContract.methods
        .getAllRaffleLayer1(false)
        .call({ from: process.env.REACT_APP_CONTRACT_OWNER_ADDR });

      const _organizePastTokens = await Promise.all(
        _pastTokens.map(async (i) => {
          let metadata = await axios.get(i.nftURI);
          let token = {
            tokenId: Number(i.nftId),
            tokenURI: i.nftURI,
            tokenImage: metadata.data.image,
            tokenName: metadata.data.name,
            tokenDesc: metadata.data.description,
            tokenStatus: i.status,
            tokenOwner: i.owner,
            tokenEndDate: i.endDate,
            tokenTicketSupply: i.ticketLimit,
            tokenTicketPrice: i.ticketPrice,
            tokenParticipatedList: i.participatedList,
            tokenWinner: i.winner,
          };
          return token;
        }),
      );

      setPresentRaffleLayer1(_organizePresentTokens);
      setPastRaffleLayer1(_organizePastTokens);
    }

    getAllRaffleLayer1();
  }, [account, walletType, caver]);

  return {
    setRaffleLayer1,
    joinRaffleLayer1,
    drawRaffleLayer1,
    announcementWinnerLayer1,
    deleteRaffleLayer1,
    presentRaffleLayer1,
    pastRaffleLayer1,
  };
}
