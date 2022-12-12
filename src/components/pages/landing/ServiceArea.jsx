import React, { forwardRef } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Anchor from '@atoms/Anchor';
import { Row, Column } from '@atoms/wrapper.style';
import { lg, sm } from '@styles/GlobalStyle';
import service1Img from '@assets/image/service1.png';
import service2Img from '@assets/image/service2.png';
import service3Img from '@assets/image/service3.png';
import service4Img from '@assets/image/service4.png';
import service5Img from '@assets/image/service5.png';
import service6Img from '@assets/image/service6.png';
import service7Img from '@assets/image/service7.png';
import service8Img from '@assets/image/service8.png';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const TitleWrapper = styled(Column)`
  width: 100%;
  height: 100%;
  background-color: ${colors.primary35};
  align-items: center;
  padding: 20vh 0;
`;

const Title = styled('div')`
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  letter-spacing: 0.5px;
  text-align: center;
  color: ${colors.primary20};
  margin-bottom: 30px;

  ${sm`
    font-size: 27px;
    `};
`;

const SubTitle = styled('div')`
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.5px;
  text-align: center;
  color: ${colors.textPrimary};

  ${sm`
    font-size: 27px;
    `}
`;

const ServiceSection = styled(Row)`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30vh;
  background-color: ${(props) => props.backgroundColor};

  ${lg`
        padding: 10vh;
    `}
`;

const ServiceImgWrapper = styled('div')`
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ServiceImg = styled('img')`
  height: 100%;
  border: 5px solid black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 20px 20px 8px;
`;

const ServiceContentWrapper = styled(Column)`
  width: 40%;
  gap: 20px;
`;

const ServiceTitleNum = styled('span')`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.bgPrimary};
`;

const ServiceTitle = styled('span')`
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.511785px;

  ${sm`
    font-size: 20px;
  `}
`;

const ServiceTitleBold = styled(ServiceTitle)`
  font-size: 36px;
  font-weight: 700;

  ${sm`
    font-size: 36px;
  `}
`;

const ServiceArea = forwardRef((props, ref) => {
  return (
    <Container>
      <Anchor ref={ref} />
      <TitleWrapper>
        <Title>이런 분들에게 필요해요!</Title>
        <SubTitle>
          ‘여성들의 민감한 의료 문제에 대해 여성의사를 찾는 분들’
        </SubTitle>
      </TitleWrapper>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>01.</ServiceTitleNum>
          <ServiceTitleBold>SHEIT</ServiceTitleBold>
          <ServiceTitle>여성을 위한 병원 정보 플랫폼</ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service1Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>02.</ServiceTitleNum>
          <ServiceTitleBold>맞춤 검색</ServiceTitleBold>
          <ServiceTitle>
            내 주변 여성 의사가 있는<br/> 병원을 검색해보세요.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service2Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>03.</ServiceTitleNum>
          <ServiceTitleBold>맞춤 리스트업</ServiceTitleBold>
          <ServiceTitle>
            여성 의료진 정보를 <br />한 눈에 확인해보세요.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service3Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>04.</ServiceTitleNum>
          <ServiceTitleBold>병원 상세 정보</ServiceTitleBold>
          <ServiceTitle>한 눈에 확인할 수 있는 정보들</ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service4Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>05.</ServiceTitleNum>
          <ServiceTitleBold>영수증 리뷰</ServiceTitleBold>
          <ServiceTitle>
            신뢰할 수 있는 방문 여성
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service5Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>06.</ServiceTitleNum>
          <ServiceTitleBold>커뮤니티</ServiceTitleBold>
          <ServiceTitle>
            여성 병원 정보와 다양한 이야기
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service6Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>07.</ServiceTitleNum>
          <ServiceTitleBold>여성 전용 캘린더</ServiceTitleBold>
          <ServiceTitle>
            병원 일정부터 생리 주기까지 <br/>확인할 수 있는 캘린더
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service7Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>08.</ServiceTitleNum>
          <ServiceTitleBold>스토어</ServiceTitleBold>
          <ServiceTitle>여성을 위한 다양한 아이템 판매</ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service8Img} />
        </ServiceImgWrapper>
      </ServiceSection>
    </Container>
  );
});

export default ServiceArea;
