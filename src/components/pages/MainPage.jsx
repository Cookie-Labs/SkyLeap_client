import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Layout from '@components/articles/Layout';
import TopBannerImg from '@assets/image/TopBanner.png';
import OAGImg from '@assets/image/OAG.png';
import CASImg from '@assets/image/CAS.png';
import UroImg from '@assets/image/Uro.png';
import DermImg from '@assets/image/Derm.png';
import BAHImg from '@assets/image/BAH.png';
import DOMImg from '@assets/image/DOM.png';
import { Column } from '@components/atoms/wrapper.style';

const TopBanner = styled('div')`
  width: 100%;
  height: 30%;
  margin-bottom: 5%;
`;

const TopBannerWrapper = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CategoryContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1%;
  margin: 0 5% 10% 5%;
`;
const CategoryImg = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid ${colors.bgPrimary};
  border-radius: 10%;
`;

const Title = styled('div')`
  font-size: 15px;
  font-weight: 600;
  height: auto;
  border: 2px solid ${colors.bgPrimary};
  border-radius: 10px;
  margin: 0 5%;
  display: inline-block;
  padding: 3px 10px;
`;
const Emphasis = styled('span')`
  color: ${colors.bgPrimary};
  font-weight: 700;
`;

const ContentContainer = styled(Column)`
  margin: 2% 5%;
  border: 2px solid ${colors.bgPrimary};
  border-radius: 10px;
  padding: 0 10px;
`;

const ContentSection = styled('div')`
  width: 100%;
  border-bottom: ${({ isLast }) => (isLast ? null : `1px solid `)};
`;

const ContentId = styled('div')`
  font-size: 15px;
  font-weight: 600;
  font-style: italic;
  color: ${colors.primary20};
  margin: 10px 0;
`;

const ContentTitle = styled('div')`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ContentDesc = styled('div')`
  font-size: 9px;
  margin-bottom: 5px;
`;

const MainPage = () => {
  return (
    <Layout>
      <TopBanner>
        <TopBannerWrapper src={TopBannerImg} alt="TopBanner" />
      </TopBanner>
      <CategoryContainer>
        <CategoryImg src={OAGImg} />
        <CategoryImg src={BAHImg} />
        <CategoryImg src={CASImg} />
        <CategoryImg src={DermImg} />
        <CategoryImg src={UroImg} />
        <CategoryImg src={DOMImg} />
      </CategoryContainer>
      <Title>
        오늘의 <Emphasis>인기</Emphasis> 글
      </Title>
      <ContentContainer>
        <ContentSection isLast={false}>
          <ContentId>이쁜 도토리</ContentId>
          <ContentTitle>오늘 처음 병원을 갔는데요</ContentTitle>
          <ContentDesc>
            제가 오늘 분당 성남에 처음으로 유방 검사를 맡으러 병원에 갔는데요
            의사 선생님이 너무 친절하시더라구요 그래서 다른 분들께 추천하려구요
            야탑역 근처에 야탑 유방외과 추천드립니다~
          </ContentDesc>
        </ContentSection>
        <ContentSection isLast={true}>
          <ContentId>분당 다람쥐</ContentId>
          <ContentTitle>염증이 너무 많이 생기는데...</ContentTitle>
          <ContentDesc>
            ....................................................................
          </ContentDesc>
        </ContentSection>
      </ContentContainer>
    </Layout>
  );
};

export default MainPage;
