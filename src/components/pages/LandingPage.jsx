import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '@styles/colors';
import Layout from '@articles/Layout';

const TopWrapper = styled('div')`
  font-size: 20px;
  font-weight: 300;
`;

const ButtonWrapper = styled('div')`
  grid-row: 6;
  display: flex;
  justify-content: center;
`;

const NextButton = styled(Link)`
  margin-top: 20px;
  height: 40px;
  padding: 0 20px;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: ${colors.primary35};
  background-color: ${colors.primary70};
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
    <Layout>
      <TopWrapper>랜딩페이지</TopWrapper>
      <TopWrapper>서비스 소개</TopWrapper>
      <TopWrapper>핵심 기능 3가지</TopWrapper>
      <TopWrapper>로드맵 및 기업비전</TopWrapper>
      <ButtonWrapper>
        <NextButton to="/login">시작하기</NextButton>
      </ButtonWrapper>
    </Layout>
  );
};

export default LandingPage;
