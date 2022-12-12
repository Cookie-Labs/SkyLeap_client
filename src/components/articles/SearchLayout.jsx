import React from 'react';
import styled from 'styled-components';
import SearchHeader from '@articles/SearchHeader';
import Footer from '@articles/Footer';
import Bottom from '@components/articles/Bottom';
import { Column } from '@atoms/wrapper.style';
import { APP_MAX_W, APP_HEADER_H } from '@constants/styleConst';

const ContentWrapper = styled('div')`
  width: ${APP_MAX_W};
  height: 100%; // TODO: 나중에 auto로
  padding-top: ${APP_HEADER_H};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-bottom: 1rem;
`;

const Layout = ({ children, page }) => {
  return (
    <Column alignItems="center">
      <SearchHeader page={page} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
      <Bottom />
    </Column>
  );
};

export default Layout;
