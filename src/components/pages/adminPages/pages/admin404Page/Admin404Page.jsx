import React from 'react'
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


const Admin404Page = () => {
  return (
    <Container>
      <ErrorIll src={ErrorImage} />
      <Link
        to="/D72915FCA91862FA6B516F78B46C56864B64784696E79586502C18F6712F61CD/overview"
        name="return to overview"
      >
        <ButtonWrapper>RETURN TO OVERVIEW</ButtonWrapper>
      </Link>
    </Container>
  );
}

export default Admin404Page