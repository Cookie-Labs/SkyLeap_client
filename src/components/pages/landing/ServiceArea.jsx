import React, { forwardRef } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Anchor from '@atoms/Anchor';
import { Row, Column } from '@atoms/wrapper.style';
import { lg, sm } from '@styles/GlobalStyle';
import service1Img from '@assets/image/service1.png';

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
          <ServiceTitleBold>여성 로그인</ServiceTitleBold>
          <ServiceTitle>
            여성들로 이루어진 커뮤니티와 병원에 대한 진솔한 후기.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service1Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>02.</ServiceTitleNum>
          <ServiceTitleBold>
            내가 원하는
            <br />
            병원과 의사 선택
          </ServiceTitleBold>
          <ServiceTitle>
            후기를 확인하고 원하는 의사에게 진료 받으세요.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service1Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>03.</ServiceTitleNum>
          <ServiceTitleBold>전문가와의 상담</ServiceTitleBold>
          <ServiceTitle>
            인터넷, 커뮤니티에서 얻은 부정확한 정보보다는 믿을 수 있는 전문가와
            상담해 보세요.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service1Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>04.</ServiceTitleNum>
          <ServiceTitleBold>여성들의 익명 커뮤니티</ServiceTitleBold>
          <ServiceTitle>
            우리들만의 정보, 고민을 이야기할 수 있는 익명 커뮤니티에요.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service1Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>05.</ServiceTitleNum>
          <ServiceTitleBold>신뢰 가능한 후기</ServiceTitleBold>
          <ServiceTitle>
            실제 방문자 인증을 통한 후기와 리뷰를 확인해보세요.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service1Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>06.</ServiceTitleNum>
          <ServiceTitleBold>여성을 위한 캘린더</ServiceTitleBold>
          <ServiceTitle>
            생리 기록(생리주기, 통증), 예방 접종, 건강검진 등 의료 기록을 한눈에
            확인해보세요.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service1Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>07.</ServiceTitleNum>
          <ServiceTitleBold>이벤트</ServiceTitleBold>
          <ServiceTitle>
            내 몸, 건강과 관련된 검진을 챌린지로, 추첨을 통한 검진비 지원, 후기
            작성을 통한 기프티콘 교환부터 제휴 병원과의 이벤트 할인.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service1Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>08.</ServiceTitleNum>
          <ServiceTitleBold>마켓 기능</ServiceTitleBold>
          <ServiceTitle>제휴된 여성용품 업체를 통한 주문.</ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service1Img} />
        </ServiceImgWrapper>
      </ServiceSection>
    </Container>
  );
});

export default ServiceArea;
