import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import LoadingSpinner from '@atoms/LoadingSpinner';

const TokenWrapper = styled.div`
    width: auto;
    height: 250px;
    border: 1px solid ${colors.bgWhite};
    border-radius: 15px;
    background-color: ${colors.bgQuaternary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TokenImage = styled.img`
    width: 100%;
    height: 70%;
    object-fit: fill;
    object-position: top;
    border-radius: 15px 15px 0 0;
    border-bottom: 1px solid ${colors.bgWhite};
`;

const TokenTitle = styled.div`
    width: 100%;
    height: 10%;
    font-size: 20px;
    font-weight: 800;
    color: ${colors.textPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TransactionButton = styled.button`
    width: 80%;
    height: 15%;
    font-size: 20px;
    font-weight: 700;
    color: ${colors.textBlack};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px solid ${colors.bgQuaternary};
    background-color: ${colors.primary40};
    cursor: pointer;

    &:hover {
        background-color: ${colors.primary80};
        transition: 0.3s
    }
`;

const TransactionToken = ({ token, transactionFunc }) => {
  const { tokenId, tokenImage, tokenName } = token;
  const [isTx, setIsTx] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTransaction = async () => {
    setIsTx(false);
    setIsLoading(true);
    try {
      await transactionFunc(tokenId);
    } catch (err) {
      console.log(err);
    }
    setIsTx(true);
    setIsLoading(false);
  };

  return (
    <>
      <TokenWrapper>
        <TokenImage src={tokenImage} />
        <TokenTitle>
          {tokenName} #{tokenId}
        </TokenTitle>
        {isLoading ? (
          <LoadingSpinner />
        ) : isTx ? (
          <span>Success!</span>
        ) : (
          <TransactionButton onClick={handleTransaction}>TX</TransactionButton>
        )}
      </TokenWrapper>
    </>
  );
};

export default TransactionToken;
