import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import nftIcon from '@assets/image/NFT_Icon.png';
import rtIcon from '@assets/image/RT_Icon.png';
import klaytnIcon from '@assets/image/Klaytn_Icon.png';
import useCaver from '@hooks/useCaver';
import useNFT from '@hooks/useNFT';
import useRT from '@hooks/useRT';

const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const BalanceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.bgWhite};
  border-radius: 10px;
  width: 180px;
  height: 30px;
  padding: 5px;
`;

const BalanceImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;

const BalanceTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 50px;
  gap: 15px;
`;

const BalanceUnit = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${colors.textSecondary};
`;

const MyBalance = () => {
  const { myNFTBalance } = useNFT();
  const { myFTBalance } = useRT();
  const { klayBalanceNum } = useCaver();

  return (
    <BalanceContainer>
      <BalanceWrapper>
        <BalanceImage src={nftIcon} />
        <BalanceTextWrapper>
          <span>{myNFTBalance}</span>
          <BalanceUnit>NFT</BalanceUnit>
        </BalanceTextWrapper>
      </BalanceWrapper>
      <BalanceWrapper>
        <BalanceImage src={rtIcon} />
        <BalanceTextWrapper>
          <span>{myFTBalance}</span>
          <BalanceUnit>RT</BalanceUnit>
        </BalanceTextWrapper>
      </BalanceWrapper>
      <BalanceWrapper>
        <BalanceImage src={klaytnIcon} />
        <BalanceTextWrapper>
          <span>{klayBalanceNum}</span>
          <BalanceUnit>KLAY</BalanceUnit>
        </BalanceTextWrapper>
      </BalanceWrapper>
    </BalanceContainer>
  );
};

export default MyBalance;
