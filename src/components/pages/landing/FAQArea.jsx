import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Anchor from '@atoms/Anchor';
import CardByToggle from '@articles/CardByToggle';
import { lg, sm } from '@styles/GlobalStyle';
import * as colors from '@styles/colors';
import { Column } from '@atoms/wrapper.style';

const Container = styled(Column)`
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 20vh 0 20vh 0;
  overflow: hidden;
  background-color: ${colors.primary70};
`;

const ContentsContainer = styled(Column)`
  line-height: 150%;
  font-size: 1rem;
  overflow: hidden;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;

  ${lg`
    font-size: 1.4rem;
    padding: 0.5rem 1.4rem;
    margin-bottom: 1.4rem;
  `}
  ${sm`
    font-size: 1.2rem;
    padding: 0.5rem 1.2rem;
    margin-bottom: 1.2rem;
  `};
`;

const TitleColumn = styled(Column)`
  white-space: nowrap;
  position: relative;
  align-items: center;

  ${lg`
    margin: 250px 0 2rem 0 ;
  `}

  ${sm`
    margin: 150px 0 100px0;
  `}
`;

const Title = styled('span')`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${colors.bgPrimary};
`;
const SubTitle = styled('span')`
  font-size: 20px;
  font-weight: 500;
  color: gray;
  margin-bottom: 20px;
`;

const Emphasis = styled('span')`
  font-size: 1.1rem;
  font-weight: 700;
`;

const Q1 = () => {
  return (
    <CardByToggle title="정확한 출시 날짜는 언제인가요?">
      <ContentsContainer>
        <div>
          <Emphasis>A. </Emphasis>
          2023년 상반기에 제휴 병원을 연결하여 2023년 7월에 어플 출시
          예정입니다.
        </div>
      </ContentsContainer>
    </CardByToggle>
  );
};

const Q2 = () => {
  return (
    <CardByToggle title="여성들만 가입 가능한가요?">
      <ContentsContainer>
        <div>
          <Emphasis>A. </Emphasis>네 맞습니다, SMS인증을 통해 여성들만이 가입
          가능합니다. 의사분들의 경우 남성/여성을 유저분들이 선택할 수 있도록
          합니다.
        </div>
      </ContentsContainer>
    </CardByToggle>
  );
};

const Q3 = () => {
  return (
    <CardByToggle title="성남시 분당구 지역에서만 사용 가능한가요?">
      <ContentsContainer>
        <div>
          <Emphasis>A. </Emphasis>
          네, 초기에는 성남시 분당구 지역 내의 5개 진료과목 (산부인과, 비뇨기과,
          유방/갑상선외과, 대장/항문외과, 피부과, 정신과)를 대상으로 하고
          있습니다.
        </div>
      </ContentsContainer>
    </CardByToggle>
  );
};

const FAQArea = forwardRef((props, ref) => {
  return (
    <Container>
      <Anchor ref={ref} />
      <TitleColumn>
        <Title>FAQ</Title>
        <SubTitle>
          이외에 궁금하신 사항은 인스타그램 @gachoncocone으로 DM 주세요! :{`)`}
        </SubTitle>
      </TitleColumn>
      <Q1 />
      <Q2 />
      <Q3 />
    </Container>
  );
});

export default FAQArea;
