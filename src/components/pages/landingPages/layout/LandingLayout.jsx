import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { TOP_NAV_HEIGHT } from './layoutConst';
import TopBar from './TopBar';

const LayoutWrapper = styled.div`
  background-color: ${colors.bgSecondary};
  width: 100vw;
  min-height: calc(100vh - ${TOP_NAV_HEIGHT}px);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const LandingLayout = ({ children }) => {

  return (
    <>
      <TopBar />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

export default LandingLayout;
