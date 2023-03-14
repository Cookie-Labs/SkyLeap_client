import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';

const TokenWrapper = styled.div`
  width: auto;
  height: 332px;
  border: 1px solid ${colors.bgWhite};
  border-radius: 15px;
  background-color: ${colors.bgSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const TokenImage = styled.img`
  width: 100%;
  height: 85%;
  object-fit: fill;
  object-position: top;
  border-radius: 15px 15px 0 0;
  border-bottom: 1px solid ${colors.bgWhite};
`;

const TokenTitle = styled.span`
    font-size: 20px;
    font-weight: 800;
    color: ${colors.textPrimary};
    margin: 15px 0;
`

const MyNFT = ({token}) => {
  const { tokenId, tokenURI, tokenImage, tokenName, tokenDesc } = token;
  console.log(tokenURI, tokenDesc);

  return (
    <>
      <TokenWrapper>
        <TokenImage src={tokenImage} />
        <TokenTitle>{tokenName} #{tokenId}</TokenTitle>
      </TokenWrapper>
    </>
  );
};

export default MyNFT;
