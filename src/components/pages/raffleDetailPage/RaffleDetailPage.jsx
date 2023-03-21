import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Layout from '@articles/Layout';
import useRaffleLayer1 from '@hooks/useRaffleLayer1';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 50px 0;
`;

const Wrapper = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TokenImage = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 20px;
  border: 1px solid ${colors.bgWhite};
  object-fit: fill;
`;

const TokenTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 30px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const RaffleDetailPage = () => {
  const location = useLocation();
  const { tokenInfo } = location.state;
  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const { joinRaffleLayer1 } = useRaffleLayer1;

  const { account } = useRecoilValue(userState);

  console.log(tokenInfo);

  return (
    <Layout page="raffle-detail-page">
      <Container>
        <Wrapper>
          <TokenImage src={tokenInfo.tokenImage} />
        </Wrapper>
        <Wrapper>
          <TokenTitle>
            {tokenInfo.tokenName} #{tokenInfo.tokenId}
          </TokenTitle>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default RaffleDetailPage;
