import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';
import { APP_MAX_W, APP_HEADER_H, APP_BOTTOM_H, FOOTER_H } from '@constants/styleConst';
import { Items as items } from '@mock/items.js';
import SearchLayout from '@articles/SearchLayout';
import {
  MdOutlineLocalHospital,
  MdFemale,
  MdOutlineCall,
  MdOutlineNavigation,
  MdOutlineHome,
} from 'react-icons/md';
import { AiOutlineYoutube } from 'react-icons/ai';
import { TbSquareAsterisk } from 'react-icons/tb';

const Container = styled('div')`
  width: 100%;
  height: calc(100vh - ${APP_HEADER_H} - ${APP_BOTTOM_H} - ${FOOTER_H} - 3rem);
`;

const HospitalContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const HospitalImage = styled('img')`
  width: 200px;
  height: 200px;
  border-radius: 20%;
`;

const HospitalInfoContainer = styled('div')`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 5%;
  gap: 10px;
`;

const Title = styled('span')`
  font-size: 20px;
  font-weight: 700;
`;

const Topic = styled('span')`
  font-size: 13px;
`;

const Extra = styled('div')`
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ButtonWrapper = styled('div')`
  width: 100%;
  height: 14%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 10px solid lightgray;
`;

const Button = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 800;
  gap: 5px;
`;

const CategoryButtonWrapper = styled('div')`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CategoryButton = styled('button')`
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: ${({ isActive }) =>
    isActive ? `3px solid ${colors.bgPrimary}` : null};
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? colors.bgPrimary : colors.bgBlack)};
`;

const ContentContainer = styled('div')`
  width: 100%;
  margin: 5%;
`

const ContentTitle = styled('span')`
  font-size: 15px;
  font-weight: 700;
`

const RiskWrapper = styled('div')`
  position: fixed;
  bottom: ${APP_BOTTOM_H};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 3rem;
  width: ${APP_MAX_W};
  z-index: 99;
  padding: 0 15px;
  background-color: ${colors.bgWhite};
  gap: 10px;
  border-top: 1px solid ${colors.bgSecondary};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const HospitalDetailPage = () => {
  const location = useLocation();
  const parsed = parse(location.search);
  const dataId = parsed.id;
  const data = items.filter((item) => item.id === dataId)[0] || false;

  const [tab, setTab] = useState('홈');

  return (
    <SearchLayout>
      <Container>
        <HospitalContainer>
          <HospitalImage src={data.image} />
          <HospitalInfoContainer>
            <Title>{data.title}</Title>
            <Topic>{data.topic}</Topic>
            <Extra>
              <MdFemale size="20px" />
              여의사 {data.doctor === 'only' ? '단독' : `${data.doctor}명`}
            </Extra>
            <Extra>
              <MdOutlineLocalHospital size="20px" />
              산부인과전문의{' '}
              {data.doctor === 'only' ? '단독' : `${data.doctor}명`}
            </Extra>
            <Extra>평점: ⭐⭐⭐⭐⭐</Extra>
          </HospitalInfoContainer>
        </HospitalContainer>
        <ButtonWrapper>
          <Button>
            <MdOutlineCall size="40px" />
            전화
          </Button>
          <Button>
            <MdOutlineNavigation size="40px" />
            네비게이션
          </Button>
          <Button>
            <MdOutlineHome size="40px" />
            홈페이지
          </Button>
          <Button>
            <AiOutlineYoutube size="40px" />
            유튜브
          </Button>
        </ButtonWrapper>
        <CategoryButtonWrapper>
          <CategoryButton
            isActive={tab === '홈'}
            value="홈"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            홈
          </CategoryButton>
          <CategoryButton
            isActive={tab === '리뷰'}
            value="리뷰"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            리뷰
          </CategoryButton>
          <CategoryButton
            isActive={tab === '사진'}
            value="사진"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            사진
          </CategoryButton>
          <CategoryButton
            isActive={tab === '주변'}
            value="주변"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            주변
          </CategoryButton>
        </CategoryButtonWrapper>
        <ContentContainer>
          {tab === '홈' ? (
            <ContentTitle>홈</ContentTitle>
          ) : tab === '리뷰' ? (
            <ContentTitle>리뷰</ContentTitle>
          ) : tab === '사진' ? (
            <ContentTitle>사진</ContentTitle>
          ) : tab === '주변' ? (
            <ContentTitle>주변</ContentTitle>
          ) : null}
        </ContentContainer>
        <RiskWrapper>
          <TbSquareAsterisk />
          *착한진료 *명의출연 *친절사랑
        </RiskWrapper>
      </Container>
    </SearchLayout>
  );
};

export default HospitalDetailPage;
