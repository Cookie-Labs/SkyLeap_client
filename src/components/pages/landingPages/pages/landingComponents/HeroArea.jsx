import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import heroImg from '@assets/image/hero_Image.jpg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to top,
      rgba(36, 36, 36, 0.3) 50%,
      rgba(36, 36, 36, 0.5) 60%,
      rgba(36, 36, 36, 0.7) 70%,
      rgba(36, 36, 36, 0.8) 80%,
      rgba(36, 36, 36, 0.9) 90%,
      rgba(36, 36, 36, 1) 100%
    ),
    url(${heroImg}) no-repeat center;
  background-size: cover;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`;

const TitleWrapper = styled.div`
  grid-row: 2;
  font-size: 150px;
  font-weight: 900;
  color: ${colors.primary80};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  -webkit-text-stroke: 2px black;
`;

const SubTitleWrapper = styled.div`
  grid-row: 3;
  font-size: 55px;
  font-weight: 900;
  color: ${colors.textPrimary};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  -webkit-text-stroke: 2px black;
`;

const HeroArea = () => {
  return (
    <Container>
      <TitleWrapper>NFToolZ</TitleWrapper>
      <SubTitleWrapper>Provides SaaS tools for NFT teams.</SubTitleWrapper>
    </Container>
  );
};

export default HeroArea;
