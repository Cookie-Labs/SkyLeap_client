import React from 'react';
import styled from 'styled-components';
import SheitLogo from '@assets/icon/Sheit_logo.png';
import * as colors from '@styles/colors';
import { lg } from '@styles/GlobalStyle';
import { APP_HEADER_H } from '@constants/styleConst';

const Container = styled('div')`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${APP_HEADER_H};
  padding: 0 2.75rem;
  background-color: ${colors.primary70};
  z-index: 999;
`;

const LogoImage = styled('img')`
  width: 130px;
  margin-right: 24px;
  cursor: pointer;

  ${lg`
    display: none;
  `}
`;

const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  font-size: 32px;
  flex: 7;
`;

const Space = styled('div')`
  flex: 1;

  ${lg`
    display: none;
  `}
`;

const Button = styled('button')`
  font-size: 1.4rem;
  font-style: italic;
  color: ${colors.textBlack};
  font-weight: 300;
  letter-spacing: 0.282486px;
  cursor: pointer;
  padding: 0.7em;
`;

const LandingHeader = ({ onNavClick }) => {
  return (
    <Container>
      <LogoImage
        src={SheitLogo}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
      <ButtonWrapper>
        <Button onClick={onNavClick} value="service">
            서비스 소개
        </Button>
        <Button onClick={onNavClick} value="roadmap">
            로드맵
        </Button>
        <Button onClick={onNavClick} value="donation">
            도네이션
        </Button>
        <Button onClick={onNavClick} value="faq">
            FAQ
        </Button>
      </ButtonWrapper>
      <Space />
    </Container>
  );
};

export default LandingHeader;
