import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroImg from '@assets/image/landing_hero.svg';
import * as colors from '@styles/colors';
import { APP_HEADER_H } from '@constants/styleConst';

const Container = styled('div')`
  width: 100%;
  height: calc(100vh - ${APP_HEADER_H});
  background: url(${heroImg}) no-repeat center;
  background-size: cover;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  padding: 0 2.75rem;
  margin-top: ${APP_HEADER_H};
`;

const TitleWrapper = styled('div')`
  grid-row: 2;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
`;

const Back = styled('div')`
  width: 50%;
  height: 600%;
  border-radius: 50%;
  position: absolute;
  z-index: -3;
  filter: blur(50px);
  background-color: ${colors.primary70};
`;

const Title = styled('span')`
  font-size: 5rem;
  text-align: center;
  font-weight: 700;
`;

const Subtitle = styled('span')`
  grid-row: 3;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1.3px;
  text-align: center;
  line-height: 1.6;
`;

const ButtonWrapper = styled('div')`
  grid-row: 8;
  display: flex;
  justify-content: center;
`;

const NextButton = styled(Link)`
  height: 5rem;
  padding: 0 3rem;
  font-weight: 600;
  font-size: 2.5rem;
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

const HeroArea = () => {
  return (
    <Container>
      <TitleWrapper>
        <Back />
        <Title>SHEIT</Title>
      </TitleWrapper>
      <Subtitle>
        여성들의 민감한 의료 정보 문제를 해결해주는 플랫폼, She It (쉿)
      </Subtitle>
      <ButtonWrapper>
        <NextButton to="/login">정보 바로보기</NextButton>
      </ButtonWrapper>
    </Container>
  );
};

export default HeroArea;
