import { useEffect, useState } from 'react';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import Caver from 'caver-js';

const kaikas = window.klaytn;

export default function useCaver() {
  const [caver, setCaver] = useState({});
  const { account } = useRecoilValue(userState);
  const [klayBalance, setKlayBalance] = useState("");
  const [klayBalanceNum, setKlayBalanceNum] = useState(0);

  useEffect(() => {
    if (typeof kaikas !== 'undefined') {
      try {
        const _caver = new Caver(kaikas);
        setCaver(_caver);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.error('No caver provider found, Please install Kaikas.');
    }
  }, []);

  useEffect(() => {
    async function myBalance() {
      caver.klay?.getBalance(account).then((bal) => {
        const convertedBal = caver.utils.convertFromPeb(bal, 'KLAY');
        const convertedBalNum = Number(convertedBal).toFixed(2);
        setKlayBalance(convertedBal);
        setKlayBalanceNum(convertedBalNum);
      });
    }
    
    if (account !== null) myBalance();
  }, [account, caver.klay, caver.utils]);

  return { caver, setCaver, klayBalance, klayBalanceNum };
}
