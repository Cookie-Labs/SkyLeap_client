import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RealAssets from './RealAssets';

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

const RealAssetsList = ({ tokenList, searchText, sortType }) => {
  const [refinedTokenList, setRefinedTokenList] = useState(tokenList);

  useEffect(() => {
    const searchTokenList = tokenList.filter((token) => {
      return token.tokenName
        .replace(' ', '')
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });

    //const filterTokenList

    const sortTokenList = [...searchTokenList].sort((a, b) => {
      switch (sortType) {
        case 'Newly Registered':
          return 0;
        case 'Previously Registered':
          return 0;
        case 'Expiring Soon':
          return new Date(a.tokenEndDate) - new Date(b.tokenEndDate);
        case 'Price: Low to High':
          return a.tokenTicketPrice - b.tokenTicketPrice;
        case 'Price: High to Low':
          return b.tokenTicketPrice - a.tokenTicketPrice;
        case 'Floor: Low to High':
          return 0;
        case 'Floor: High to Low':
          return 0;
        default:
          return 0;
      }
    });

    setRefinedTokenList(sortTokenList);
  }, [tokenList, searchText, sortType]);

  if (tokenList.length !== 0) {
    return (
      <RafflesContainer>
        {refinedTokenList.map((token) => (
          <RealAssets key={token.tokenId} token={token} />
        ))}
      </RafflesContainer>
    );
  } else {
    return <NoDataWrapper>There are no raffles.</NoDataWrapper>;
  }
};

export default RealAssetsList;
