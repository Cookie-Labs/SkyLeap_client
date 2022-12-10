import React, { forwardRef } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { Row, Column } from '@atoms/wrapper.style';
import donationImg from '@assets/image/landing_donation.svg';
import Anchor from '@atoms/Anchor';
import { sm } from '@styles/GlobalStyle';

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
`;

const DonationContainer = styled(Row)`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30vh;
`;

const DonationImgWrapper = styled('div')`
  width: 60%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DonationImg = styled('img')`
  width: 100%;
`;

const DonationContentWrapper = styled(Column)`
  width: 40%;
  gap: 20px;
`;

const DonationTitle = styled('span')`
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.511785px;

  ${sm`
    font-size: 20px;
  `}
`;

const DonationTitleBold = styled(DonationTitle)`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.bgPrimary};

  ${sm`
    font-size: 36px;
  `}
`;

const DonationContent = styled('span')`
  font-size: 20px;
  color: gray;
`;

const DonationArea = forwardRef((props, ref) => {
  return (
    <Container>
      <Anchor ref={ref} />
      <DonationContainer>
        <DonationImgWrapper>
          <DonationImg src={donationImg} alt={donationImg} />
        </DonationImgWrapper>
        <DonationContentWrapper>
          <DonationTitleBold>도네이션</DonationTitleBold>
          <DonationTitle>
            여러분의 관심과 사랑으로 빠른 출시가 가능해집니다.
          </DonationTitle>
          <DonationContent>신한은행 110504174354</DonationContent>
          <DonationContent>제일은행 49320031854</DonationContent>
        </DonationContentWrapper>
      </DonationContainer>
    </Container>
  );
});

export default DonationArea;
