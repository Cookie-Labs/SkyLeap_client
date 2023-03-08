import { useEffect, useState } from 'react';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import useCaver from '@hooks/useCaver';
import { TOKEN_ABI } from '@hooks/useABI';

const TOKEN_ADDR = process.env.REACT_APP_CYPRESS_TOKEN_ADDR;

export default function useRT() {
  const { caver } = useCaver();
  const { account, walletType } = useRecoilValue(userState);
  const [myTokenBalance, setMyTokenBalance] = useState(0);

  useEffect(() => {
    async function getMyTokenBalance() {
      if (walletType === 'Kaikas') {
        const myContract = await new caver.klay.Contract(TOKEN_ABI, TOKEN_ADDR, {
          from: account,
        });

        myContract.methods
          .balanceOf(account)
          .call({ from: account })
          .then((result) => setMyTokenBalance(result));
      }
    }

    getMyTokenBalance();
  }, [account, walletType, caver]);

  return { myTokenBalance };
}
