import { useEffect, useState } from 'react';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import useCaver from '@hooks/useCaver';

export default function useRT() {
  const { caver } = useCaver();
  const { account, walletType } = useRecoilValue(userState);
  const [myTokenBalance, setMyTokenBalance] = useState(0);

  useEffect(() => {
    async function getMyTokenBalance() {
      if (walletType === 'Kaikas') {
        const myContract = new caver.klay.Contract(
          JSON.parse(process.env.REACT_APP_TOKEN_ABI),
          `${process.env.REACT_APP_CYPRESS_TOKEN_ADDR}`,
          {
            from: account,
          },
        );

        myContract.methods
          .balanceOf(account)
          .call({ from: account })
          .then((result) => setMyTokenBalance(result));
      }
    }

    getMyTokenBalance();
  }, [account, walletType, caver.klay]);

  return { myTokenBalance };
}
