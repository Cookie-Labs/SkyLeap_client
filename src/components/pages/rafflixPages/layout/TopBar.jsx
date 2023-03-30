import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import rafflixLogo from '@assets/logo/Rafflix_logo.svg';
import { TOP_NAV_HEIGHT, SIDE_NAV_WIDTH } from './layoutConst';
import ConnectWallet from '@articles/ConnectWallet';
import MyBalance from '@articles/MyBalance';
import { BiMenu } from 'react-icons/bi';

const TopBarContainer = styled.div`
  backdrop-filter: blur(6px);
  background-color: ${colors.bgSecondary};
  border-bottom: 1px solid ${colors.bgQuaternary};
  position: fixed;
  top: 0;
  left: ${(props) => (props.lgUp ? `${SIDE_NAV_WIDTH}px` : null)};
  width: ${(props) =>
    props.lgUp ? `calc(100vw - ${SIDE_NAV_WIDTH}px)` : '100vw'};
  z-index: 10;
`;

const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
  min-height: ${TOP_NAV_HEIGHT}px;
  padding: 0 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const LogoImage = styled.img`
  width: 200px;
  margin-right: 24px;

  &:hover {
    width: 190px;
    transition: 0.3s;
  }
`;

const WalletButtonWrapper = styled.div`
  height: ${TOP_NAV_HEIGHT}px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconButton = styled.button`
  cursor: pointer;
`;

const TopBar = ({ onNavOpen }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <TopBarContainer lgUp={lgUp}>
        <TopBarWrapper>
          <ButtonsWrapper>
            {!lgUp && (
              <>
                <IconButton onClick={onNavOpen}>
                  <BiMenu size="30" color={colors.bgWhite} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    navigate('/rafflix/nftRaffles');
                  }}
                >
                  <LogoImage src={rafflixLogo} />
                </IconButton>
              </>
            )}
          </ButtonsWrapper>
          <ButtonsWrapper>
            <WalletButtonWrapper>
              <ConnectWallet />
            </WalletButtonWrapper>
            <MyBalance />
          </ButtonsWrapper>
        </TopBarWrapper>
      </TopBarContainer>
    </>
  );
};

export default TopBar;
