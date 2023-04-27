import { useEffect, useState } from 'react';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import useCaver from '@hooks/useCaver';
import { FT_ABI } from '@hooks/useABI';

const FT_ADDR = process.env.REACT_APP_CYPRESS_FT_ADDR;

export default function useFT() {
  const { caver } = useCaver();
  const { account, walletType } = useRecoilValue(userState);
  const [myFTBalance, setMyFTBalance] = useState(0);

  useEffect(() => {
    async function getMyFTBalance() {
      if (walletType === 'Kaikas') {
        const myContract = await new caver.klay.Contract(FT_ABI, FT_ADDR, {
          from: account,
        });

        await myContract.methods
          .balanceOf(account)
          .call({ from: account })
          .then((result) => setMyFTBalance(result));
      }
    }

    getMyFTBalance();
  }, [account, walletType, caver]);

  return { myFTBalance };
}
