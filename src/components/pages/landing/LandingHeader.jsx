import React from 'react';
import styled from 'styled-components';
import SheitLogo from '@assets/icon/Sheit_logo.svg';
import * as colors from '@styles/colors';
import { lg } from '@styles/GlobalStyle';
import { APP_HEADER_H } from '@constants/styleConst';
import { Link } from 'react-router-dom';

const Container = styled('div')`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${APP_HEADER_H};
  padding: 0 2.75rem;
  background-color: ${colors.primary15};
  z-index: 999;
`;

const LogoImage = styled('img')`
  height: calc(${APP_HEADER_H} - 1rem);
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

const Button = styled('button')`
  font-size: 1.4rem;
  font-style: italic;
  color: ${colors.textBlack};
  font-weight: 300;
  letter-spacing: 0.282486px;
  cursor: pointer;
  padding: 0.7em;
`;

const NextButton = styled(Link)`
  height: calc(${APP_HEADER_H} - 2rem);
  padding: 0 1rem;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  letter-spacing: 2.44906px;
  color: ${colors.textPrimary};
  background: ${colors.bgSecondary};
  border-radius: 25px;
  opacity: 0.85;
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
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
      <NextButton to="/login">정보 바로보기</NextButton>
    </Container>
  );
};

export default LandingHeader;
