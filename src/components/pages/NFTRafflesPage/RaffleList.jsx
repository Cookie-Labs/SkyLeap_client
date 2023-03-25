import React from 'react';
import styled from 'styled-components';
import Raffle from './Raffle';

const RafflesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px;
`;

const NoDataWrapper = styled.div`
  width: 100%;
  height: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
`;

const RaffleList = ({ tokenList }) => {
  if (tokenList.length !== 0) {
    return (
      <RafflesContainer>
        {tokenList.map((token) => (
          <Raffle key={token.tokenId} token={token} />
        ))}
      </RafflesContainer>
    );
  } else {
    return <NoDataWrapper>There are no raffles.</NoDataWrapper>;
  }
};

export default RaffleList;
