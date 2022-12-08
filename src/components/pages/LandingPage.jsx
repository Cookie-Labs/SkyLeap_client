import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '@styles/colors';

const ButtonWrapper = styled('div')`
  grid-row: 6;
  display: flex;
  justify-content: center;
`;

const TopWrapper = styled('div')`
  font-size: 50px;
  font-weight: 300;
`;
const BottomWrapper = styled('div')`
  font-family: 'Shrikhand', cursive;
  font-style: italic;
  font-size: 50px;
  font-weight: 300;
`;

const NextButton = styled(Link)`
  height: 6rem;
  padding: 0 5rem;
  font-weight: 400;
  font-size: 2.5rem;
  text-align: center;
  color: ${colors.primary40};
  background-color: ${colors.primary80};
  letter-spacing: 2.44906px;
  border-radius: 50px;
  opacity: 0.85;
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

const LandingPage = () => {
  return (
    <>
      <TopWrapper>랜딩페이지</TopWrapper>
      <ButtonWrapper>
        <NextButton to="/main">시작하기</NextButton>
      </ButtonWrapper>
      <BottomWrapper>Landing Page</BottomWrapper>
    </>
  );
};

export default LandingPage;
