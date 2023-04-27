import React from 'react';
import styled from 'styled-components';
// import * as colors from '@styles/colors';
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

const HeroArea = () => {
  return <Container></Container>;
};

export default HeroArea;
