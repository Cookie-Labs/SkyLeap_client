import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import TopBar from './TobBar';
import SideBar from './SideBar';
import { TOP_NAV_HEIGHT, SIDE_NAV_WIDTH } from './layoutConst';

const LayoutContainer = styled.div`
  position: relative;
  left: ${(props) => (props.lgUp ? `${SIDE_NAV_WIDTH}px` : 0)};
  top: ${TOP_NAV_HEIGHT}px;
  background-color: ${colors.bgTertiary};
  width: ${(props) =>
    props.lgUp ? `calc(100vw - ${SIDE_NAV_WIDTH}px)` : '100vw'};
  min-height: calc(100vh - ${TOP_NAV_HEIGHT}px);
  padding: 20px;
`;

const AdminLayout = ({ children }) => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const [openNav, setOpenNav] = useState(false);
  const { pathname } = useLocation();

  const handleTabChange = useCallback(() => {
    if (openNav) setOpenNav(false);
  }, [openNav]);

  useEffect(() => {
    handleTabChange();
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <>
      <TopBar onNavOpen={() => setOpenNav(true)} />
      <SideBar onNavClose={() => setOpenNav(false)} open={openNav} />
      <LayoutContainer lgUp={lgUp}>{children}</LayoutContainer>
    </>
  );
};

export default AdminLayout;
