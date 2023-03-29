import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import * as colors from '@styles/colors';
import { toast } from 'react-toastify';
import kaikasImage from '@assets/image/Kaikas_Icon.png';
import { BiUser, BiPencil, BiWalletAlt } from 'react-icons/bi';
import {RiAdminLine} from 'react-icons/ri'
import { formatAddress } from '@utils/parser';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userAccount, userWalletType, userNetworkId } from '@states/userState';
import CustomModal from '@articles/CustomModal';
import { networks } from '@constants/networkInfo';
import { useNavigate } from 'react-router-dom';
// import useCaver from '@hooks/useCaver';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

const ImgWrapper = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const SelectButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.bgTertiary};
  width: 180px;
  min-height: 50px;
  border-radius: 5px;
  font-size: 15px;
  color: ${(props) => (props.emphasize ? colors.bgRed : colors.textPrimary)};
  border: 1px solid
    ${(props) => (props.emphasize ? colors.bgRed : colors.textPrimary)};
  outline: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
  opacity: 0.8;

  &:hover {
    background-color: ${colors.bgWhite};
    opacity: 1;
  }
`;

const ModalTitle = styled.span`
  margin-bottom: 20px;
  font-style: italic;
`;

const borderGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const WalletButton = styled.button`
  width: 100%;
  min-height: 60px;
  padding: 5px;
  font-size: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${colors.bgPrimary};

  position: relative;

  &:after {
    --borderWidth: 3px;
    content: '';
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      #ff770f,
      #c8f53c,
      #a166ab,
      #5073b8,
      #1098ad,
      #f37055,
      #07b39b
    );
    border-radius: 15px;
    z-index: -1;
    animation: ${borderGradient} 3s ease alternate infinite;
    background-size: 300% 300%;
  }
`;

const shine = keyframes`
	from {
		background-position: 0%;
		opacity: 0.9;
	}

	to {
		background-position: 200%;
		opacity: 1;
	}
`;

const GradientSectionTitle = styled('span')`
  font-size: 15px;
  font-weight: 700;
  background: linear-gradient(
    90deg,
    #f0d6ef,
    #dae6d1 25.52%,
    #daedd3 50%,
    #d6d6e0 76.04%,
    #edddd3
  );
  background-size: 200% auto;
  background-position: 0%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shine} 4s linear infinite;
`;

const kaikas = window.klaytn;

const ConnectWallet = () => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [showDisconnectWallet, setShowDisconnectWallet] = useState(false);
  const [account, setAccount] = useRecoilState(userAccount);
  const [walletType, setWalletType] = useRecoilState(userWalletType);
  const setNetworkId = useSetRecoilState(userNetworkId);
  const klaytnNetworkId = networks['cypress'].chainId;
  const navigate = useNavigate();
  // const caver = useCaver();

  const loginWithKaikas = async () => {
    if (!kaikas) {
      toast.error('Kaikas installation is required.');
      window.open(
        'https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi',
      );
      return;
    }

    try {
      // TODO: 안될 시 const accounts = await kaikas.enable();
      const accounts = await toast.promise(
        kaikas.request({
          method: 'eth_requestAccounts',
        }),
        { pending: 'Interlocking kaikas wallet...' },
        { closeButton: true },
      );
      // TODO: 안될 시 klaytn.networkVersion
      const chainId = await kaikas.request({ method: 'eth_chainId' });
      setAccount(accounts[0]);
      setWalletType('Kaikas');
      setNetworkId(chainId);
      localStorage.setItem('_user', accounts[0]);
      localStorage.setItem('_wallet', 'Kaikas');

      // const signMessage = `Rafflix\n 'Your address: ${accounts[0]}'`;
      // await caver.klay.sign(signMessage);

      if (chainId !== klaytnNetworkId) {
        try {
          await kaikas.request({
            method: 'wallet_switchKlaytnChain',
            params: [{ chainId: klaytnNetworkId }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            try {
              await kaikas.request({
                method: 'wallet_addKlaytnChain',
                params: [networks['cypress']],
              });
            } catch (addError) {
              console.error('Add new network FAILED', addError);
            }
          }
          console.error('Switch network FAILED', switchError);
        }
      }

      toast.success(`${formatAddress(accounts[0])}, welcome.`, {
        autoClose: 1500,
      });
      setTimeout(() => window.location.reload(), 1500);
    } catch {
      toast.error(
        'Login failed. Please turn off your browser and turn it on again.',
        {
          autoClose: 1500,
        },
      );
    }
  };

  function handleConnect() {
    loginWithKaikas();
    setShowWalletOptions(false);
  }

  function handleDisconnect() {
    toast.warn('Logout!', {
      autoClose: 1500,
    });
    setAccount('');
    setWalletType('');
    setNetworkId('');
    localStorage.removeItem('_user');
    localStorage.removeItem('_wallet');
    setShowDisconnectWallet(false);
    setTimeout(() => window.location.reload(), 1500);
  }

  return (
    <Container>
      {!account ? (
        <WalletButton onClick={() => setShowWalletOptions(true)}>
          <BiWalletAlt size="30" color={colors.textPrimary} />
          <GradientSectionTitle>Connect Wallet</GradientSectionTitle>
        </WalletButton>
      ) : walletType === 'Kaikas' ? (
        <WalletButton onClick={() => setShowDisconnectWallet(true)}>
          <ImgWrapper src={kaikasImage} />
          {formatAddress(account)}
        </WalletButton>
      ) : null}

      <CustomModal
        show={showWalletOptions}
        toggleModal={() => setShowWalletOptions(false)}
      >
        <ModalTitle>Select Wallet</ModalTitle>
        <SelectButton onClick={handleConnect}>
          <ImgWrapper src={kaikasImage} />
          Kaikas
        </SelectButton>
      </CustomModal>

      <CustomModal
        show={showDisconnectWallet}
        toggleModal={() => setShowDisconnectWallet(false)}
      >
        <ModalTitle>{formatAddress(account)}</ModalTitle>
        {account === process.env.REACT_APP_CONTRACT_OWNER_ADDR ? (
          <SelectButton
            onClick={() => {
              navigate(
                '/D72915FCA91862FA6B516F78B46C56864B64784696E79586502C18F6712F61CD/overview',
              );
            }}
          >
            <RiAdminLine size="30" />
            Admin
          </SelectButton>
        ) : null}
        <SelectButton
          onClick={() => {
            navigate('/my');
          }}
        >
          <BiUser size="30" />
          My Page
        </SelectButton>
        <SelectButton
          onClick={() => {
            navigate('/createNFT');
          }}
        >
          <BiPencil size="30" />
          Create
        </SelectButton>
        <SelectButton onClick={handleDisconnect} emphasize="true">
          <BiWalletAlt size="30" />
          Disconnect
        </SelectButton>
      </CustomModal>
    </Container>
  );
};

export default ConnectWallet;
