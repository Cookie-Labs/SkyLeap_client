import React, { useState, useEffect } from 'react';
import MyNFT from './MyNFT';
import styled from 'styled-components';

const TokenContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px;
`;

const MyNFTList = ({ nftList, type }) => {
  const [typeNftList, setTypeNftList] = useState([]);

  useEffect(() => {
    let filteredList;
    if (type === 'InProgress') {
      filteredList = nftList.filter((token) => token.tokenIsListing === true);
      setTypeNftList(filteredList);
    } else if (type === 'NotInProgress') {
      filteredList = nftList.filter((token) => token.tokenIsListing === false);
      setTypeNftList(filteredList);
    } else {
      setTypeNftList(nftList);
    }
  }, [nftList, type]);

  return (
    <TokenContainer>
      {typeNftList.map((token) => (
        <MyNFT
          key={token.tokenId}
          id={token.tokenId}
          uri={token.tokenURI}
          image={token.tokenImage}
          name={token.tokenName}
          desc={token.tokenDesc}
        />
      ))}
    </TokenContainer>
  );
};

export default MyNFTList;
