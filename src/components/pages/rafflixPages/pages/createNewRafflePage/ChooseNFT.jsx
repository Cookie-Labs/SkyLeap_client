import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';

const TokenWrapper = styled.button`
  cursor: pointer;
  width: 100px;
  height: 120px;
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
  font-size: 5px;
  font-weight: 500;
  color: ${colors.textPrimary};
`;

const ChooseNFT = ({ token, onTokenIdChange, onTokenImageChange, onSelectionComplete }) => {
  // tokenURI, tokenDesc 추가로 들어있음
  const { tokenId, tokenImage, tokenName } = token;

  const handleClick = () => {
    onTokenIdChange(tokenId);
    onTokenImageChange(tokenImage);
    onSelectionComplete(false);
  }

  return (
    <>
      <TokenWrapper onClick={handleClick}>
        <TokenImage src={tokenImage} />
        <TokenTitle>
          {tokenName} #{tokenId}
        </TokenTitle>
      </TokenWrapper>
    </>
  );
};

export default ChooseNFT;
