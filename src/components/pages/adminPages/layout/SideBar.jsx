import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, useTheme, useMediaQuery } from '@mui/material';
import { Scrollbar } from './scrollbar';
import SkyLeapLogo from '@assets/logo/SkyLeap_logo.svg';
import SideNavItem from './SideNavItem';
import { BiWater, BiTransferAlt } from 'react-icons/bi';
import { SIDE_NAV_WIDTH, TOP_NAV_HEIGHT } from './layoutConst';

const items = [
  {
    title: 'Overview',
    path: '/D72915FCA91862FA6B516F78B46C56864B64784696E79586502C18F6712F61CD/overview',
    icon: <BiWater size="30" />,
  },
  {
    title: 'Transaction',
    path: '/D72915FCA91862FA6B516F78B46C56864B64784696E79586502C18F6712F61CD/transaction',
    icon: <BiTransferAlt size="30" />,
  },
];

const NavButtonsContainer = styled.div`
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
  margin-top: 15px;
`;

const LogoImage = styled.img`
  height: ${TOP_NAV_HEIGHT}px;

  &:hover {
    height: calc(${TOP_NAV_HEIGHT}px - 5px);
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
      <NavButtonsContainer>
        <LogoButtonWrapper
          onClick={() => {
            navigate('/');
          }}
        >
          <LogoImage src={SkyLeapLogo} />
        </LogoButtonWrapper>
        <NavButtonsWrapper>
          {items.map((item) => {
            const active = item.path ? pathname === item.path : false;
            return (
              <SideNavItem
                key={item.title}
                active={active}
                path={item.path}
                title={item.title}
                icon={item.icon}
                disabled={item.disabled}
              />
            );
          })}
        </NavButtonsWrapper>
      </NavButtonsContainer>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: `${colors.bgSecondary}`,
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
          backgroundColor: `${colors.bgSecondary}`,
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
