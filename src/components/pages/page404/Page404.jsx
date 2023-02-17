import React from 'react';
import Layout from '@articles/Layout';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { Link } from 'react-router-dom';
import ErrorImage from '@assets/image/ErrorImage.svg';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  align-items: center;
  flex-direction: column;
`;

const ErrorIll = styled.img`
  width: 50vw;
  height: 50vh;
  margin: 10vh;
`;

const ButtonWrapper = styled.button`
  color: ${colors.bgRed};
  width: 300px;
  height: 70px;
  font-size: 30px;
  cursor: pointer;
  border: 4px solid ${colors.bgRed};
`;

const Page404 = () => {
  return (
    <Layout>
      <Container>
        <ErrorIll src={ErrorImage} />
        <Link to="/" name="return to main">
          <ButtonWrapper>RETURN TO HOME</ButtonWrapper>
        </Link>
      </Container>
    </Layout>
  );
};

export default Page404;
