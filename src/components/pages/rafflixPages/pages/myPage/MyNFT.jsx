import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';

const TokenWrapper = styled.div`
  width: auto;
  height: 332px;
  border: 2px solid ${colors.bgQuaternary};
  border-radius: 15px;
  background-color: ${colors.bgTertiary};
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
  border-bottom: 2px solid ${colors.bgQuaternary};
`;

const TokenTitle = styled.span`
    font-size: 20px;
    font-weight: 800;
    color: ${colors.textPrimary};
    margin: 15px 0;
`

const MyNFT = ({token}) => {
  // tokenURI, tokenDesc 추가로 들어있음
  const { tokenId, tokenImage, tokenName} = token;

  return (
    <>
      <TokenWrapper>
        <TokenImage src={tokenImage} />
        <TokenTitle>
          {tokenName} #{tokenId}
        </TokenTitle>
      </TokenWrapper>
    </>
  );
};

export default MyNFT;
