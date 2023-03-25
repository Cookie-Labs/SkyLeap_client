import React from 'react';
import MyNFT from './MyNFT';
import styled from 'styled-components';

const TokenContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px;
`;

const NoDataWrapper = styled.div`
  width: 100%;
  height: 392px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
`;

const MyNFTList = ({ tokenList }) => {
  
  if (tokenList.length !== 0) {
    return (
      <TokenContainer>
        {tokenList.map((token) => (
          <MyNFT key={token.tokenId} token={token} />
        ))}
      </TokenContainer>
    );
  } else {
    return <NoDataWrapper>There are no NFTs.</NoDataWrapper>
  }
};

export default MyNFTList;
