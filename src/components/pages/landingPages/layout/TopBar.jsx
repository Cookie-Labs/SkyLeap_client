import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { TOP_NAV_HEIGHT } from './layoutConst';
import { useTheme, useMediaQuery } from '@mui/material';
import nftoolzLogo from '@assets/logo/NFToolZ_logo.svg';
import { BsFillLockFill, BsBagFill, BsTools } from 'react-icons/bs';
import { RiAuctionFill, RiTicketFill } from 'react-icons/ri';
import TopNavItem from './TopNavItem';

const TopBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
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
  width: auto;
  height: 64px;
`;

const NavButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 60px;
  border-radius: 10px;
  border: 2px dashed #ffbf69;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
  color: ${colors.textPrimary};
  font-weight: 700;
`;

const items = [
  {
    title: 'RAFFLES',
    path: '/rafflix/nftRaffles',
    icon: <RiTicketFill />,
  },
  {
    title: 'AUCTION',
    path: null,
    icon: <RiAuctionFill />,
  },
  {
    title: 'MARKET',
    path: null,
    icon: <BsBagFill />,
  },
  {
    title: 'STAKING',
    path: null,
    icon: <BsFillLockFill />,
  },
];

const TopBar = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <TopBarContainer>
        <TopBarWrapper>
          <ButtonsWrapper>
            <LogoImage
              src={nftoolzLogo}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </ButtonsWrapper>
          <ButtonsWrapper>
            {lgUp ? (
              <>
                {items.map((item) => {
                  return (
                    <TopNavItem
                      key={item.title}
                      icon={item.icon}
                      path={item.path}
                      title={item.title}
                    />
                  );
                })}
              </>
            ) : (
              <NavButton>
                <BsTools />
                TOOLS
              </NavButton>
            )}
          </ButtonsWrapper>
        </TopBarWrapper>
      </TopBarContainer>
    </>
  );
};

export default TopBar;
