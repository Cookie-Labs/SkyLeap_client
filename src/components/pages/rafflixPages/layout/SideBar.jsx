import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, useTheme, useMediaQuery } from '@mui/material';
import { Scrollbar } from './scrollbar';
import rafflixLogo from '@assets/logo/Rafflix_logo.svg';
import SideNavItem from './SideNavItem';
import {
  HiOutlineHome,
  HiOutlineTicket,
  HiOutlineShoppingBag,
  HiOutlinePlusCircle,
} from 'react-icons/hi';
import { SIDE_NAV_WIDTH, TOP_NAV_HEIGHT } from './layoutConst';

const items = [
  {
    title: 'NFToolZ HOME',
    path: '/',
    icon: <HiOutlineHome size="30" />,
    color: `${colors.bgWhite}`,
  },
  {
    title: 'NFT RAFFLES',
    path: '/rafflix/nftRaffles',
    icon: <HiOutlineTicket size="30" />,
    color: `${colors.primary80}`,
  },
  {
    title: 'REAL ASSETS RAFFLES',
    path: '/rafflix/realAssetsRaffles',
    icon: <HiOutlineShoppingBag size="30" />,
    color: `${colors.secondary80}`,
  },
  {
    title: 'CREATE NEW RAFFLES',
    path: '/rafflix/createRaffle',
    icon: <HiOutlinePlusCircle size="30" />,
    color: `${colors.tertiary80}`,
  },
];

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NavButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 20px;
`;

const LogoButtonWrapper = styled.button`
  cursor: pointer;
  width: 100%;
  height: ${TOP_NAV_HEIGHT}px;
`;

const LogoImage = styled.img`
  width: 200px;

  &:hover {
    width: 190px;
    transition: 0.3s;
  }
`;

const SideBar = ({ open, onNavClose }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const { pathname } = useLocation();

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
        },
        '& .simplebar-scrollbar:before': {
          background: `${colors.bgRed}`,
        },
      }}
    >
      <SideBarContainer>
        <LogoButtonWrapper
          onClick={() => {
            navigate('/rafflix/nftRaffles');
          }}
        >
          <LogoImage src={rafflixLogo} />
        </LogoButtonWrapper>
        <NavButtonsWrapper>
          {items.map((item) => {
            const active = item.path ? pathname === item.path : false;
            return (
              <SideNavItem
                key={item.title}
                active={active}
                activeColor={item.color}
                path={item.path}
                title={item.title}
                icon={item.icon}
                disabled={item.disabled}
              />
            );
          })}
        </NavButtonsWrapper>
      </SideBarContainer>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: `${colors.bgPrimary}`,
            color: `${colors.textPrimary}`,
            width: SIDE_NAV_WIDTH,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onNavClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: `${colors.bgPrimary}`,
          color: `${colors.textPrimary}`,
          width: SIDE_NAV_WIDTH,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

export default SideBar;
