import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { formatAddress } from '@utils/parser';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userAccount, userWalletType, userNetworkId } from '@states/userState';
import { useNavigate } from 'react-router-dom';
import { networks } from '@constants/networkInfo';

const kaikas = window.klaytn;

const CheckWallet = () => {
  const [account, setAccount] = useRecoilState(userAccount);
  const setWalletType = useSetRecoilState(userWalletType);
  const [networkId, setNetworkId] = useRecoilState(userNetworkId);
  const navigate = useNavigate();
  const klaytnNetwork = networks['cypress'].chainId;

  useEffect(() => {
    if (!kaikas) {
      toast.error('Kaikas installation is required.', { autoClose: 60000 });
      return;
    }
  }, []);

  // Kaikas 잠금 동작 인식 + 계정 변경 인식
  useEffect(() => {
    if (!kaikas) {
      return;
    }

    const handleAccountsChanged = (accounts) => {
      if (!account) {
        return;
      }
      if (accounts.length === 0) {
        setAccount('');
        setWalletType('');
        localStorage.removeItem('_user');
        localStorage.removeItem('_wallet');
        toast.warn('Your account has been locked. Please log in again.', {
          autoClose: 1500,
        });
      } else if (accounts[0] !== account) {
        console.log(accounts[0]);
        toast.success(
          `The account has been changed to ${formatAddress(accounts[0])}`,
          {
            autoClose: 1500,
          },
        );
        setAccount(accounts[0]);
        localStorage.setItem('_user', accounts[0]);
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 1500);
      }
    };

    // TODO: 안될 시 const accounts = await kaikas.enable();
    // TODO: eth_requestAccounts로 할 시에는 잠금 화면이 다시 뜬다.
    kaikas
      .request({ method: 'eth_accounts' })
      .then(handleAccountsChanged)
      .catch((err) => {
        console.error(err);
      });

    kaikas?.on('accountsChanged', handleAccountsChanged);
    return () => {
      kaikas.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, [account, setAccount, setWalletType, navigate]);

  // Kaikas 체인 변경 시 로그아웃
  useEffect(() => {
    if (!kaikas) {
      return;
    }

    const handleNetworkChanged = async () => {
      // TODO: 안될 시 klaytn.networkVersion
      const chainId = await kaikas.request({ method: 'eth_chainId' });
      if (chainId !== klaytnNetwork) {
        setAccount('');
        setWalletType('');
        setNetworkId('');
        localStorage.removeItem('_user');
        localStorage.removeItem('_wallet');
        toast.warn('The network has changed. Please log in again.', {
          autoClose: 1500,
        });
        // setTimeout(() => window.location.reload(), 1500);
      } else {
        toast.success('Cypress, Changed to Klaytn Mainnet.', {
          autoClose: 1500,
        });
        // setTimeout(() => window.location.reload(), 1500);
      }
    };

    kaikas?.on('networkChanged', handleNetworkChanged);
    return () => {
      kaikas?.removeListener('networkChanged', handleNetworkChanged);
    };
  }, [setAccount, setNetworkId, setWalletType, klaytnNetwork, networkId]);

  return;
};

export default CheckWallet;
