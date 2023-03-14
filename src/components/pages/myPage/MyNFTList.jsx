import React, { useState, useEffect } from 'react';
import MyNFT from './MyNFT';
import styled from 'styled-components';
import useNFT from '@hooks/useNFT';

const TokenContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px;
`;

const MyNFTList = ({ type }) => {
  const { myNFTAll, myNFTInProgress, myNFTNotInProgress } = useNFT();
  const [typeNftList, setTypeNftList] = useState([]);

  useEffect(() => {
    if (type === 'InProgress') {
      setTypeNftList(myNFTInProgress);
    } else if (type === 'NotInProgress') {
      setTypeNftList(myNFTNotInProgress);
    } else {
      setTypeNftList(myNFTAll);
    }
  }, [type, myNFTInProgress, myNFTNotInProgress, myNFTAll]);

  return (
    <TokenContainer>
      {typeNftList.map((token) => (
        <MyNFT key={token.tokenId} token={token} />
      ))}
    </TokenContainer>
  );
};

export default MyNFTList;
