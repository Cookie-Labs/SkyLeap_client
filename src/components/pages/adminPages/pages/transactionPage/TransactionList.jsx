import React from 'react';
import styled from 'styled-components';
import TransactionToken from './TransactionToken'

const TokensContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const NoDataWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
`;

const TransactionList = ({ tokenList, transactionFunc }) => {
  if (tokenList.length !== 0) {
    return (
      <TokensContainer>
        {tokenList.map((token) => (
          <TransactionToken
            key={token.tokenId}
            token={token}
            transactionFunc={transactionFunc}
          />
        ))}
      </TokensContainer>
    );
  } else {
    return <NoDataWrapper>There are no data.</NoDataWrapper>;
  }
};

export default TransactionList;
