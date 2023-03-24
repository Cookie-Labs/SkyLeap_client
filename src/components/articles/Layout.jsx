import React from 'react';
import styled from 'styled-components';
import Header from '@articles/Header';
import Footer from '@articles/Footer';
import { Column } from '@atoms/wrapper.style';
import { APP_MAX_W, APP_HEADER_H, FOOTER_H, FOOTER_MT } from '@constants/styleConst';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${APP_MAX_W};
    margin-top: ${APP_HEADER_H}px;
    min-height: calc(100vh - ${APP_HEADER_H}px - ${FOOTER_H}px - ${FOOTER_MT}px);
`

const Layout = ({children, page}) => {
  return (
    <Column alignItems="center">
        <Header page={page} />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer/>
    </Column>
  );
};

export default Layout;
