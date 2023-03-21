import { toast } from 'react-toastify';

export const walletConnectError = () => {
  toast.error('Need to connect wallet.', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
};

export const missingEmailError = () => {
  toast.error('Login is required.', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
};
