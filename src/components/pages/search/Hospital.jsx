import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';

const Container = styled('div')`
  border-bottom: 1px solid lightgray;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

const Title = styled('span')`
  font-size: 17px;
  font-weight: 800;
`;

const Content1 = styled('span')`
  font-size: 13px;
  font-weight: 600;
`;

const Content2 = styled('span')`
    font-size: 13px;
`

const ImageWrapper = styled('img')`
    width: 100px;
    height: 100px;
    object-fit: cover;
`

const Hospital = ({ id, topic, image, title, place, doctor }) => {
  return (
    <Container key={id}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Content1>
          <span style={{ color: colors.bgPrimary, fontWeight: '800' }}>
            여성
          </span>{' '}
          의료진: {doctor === "only" ? "단독" : `${doctor}명`} | ⭐ 5.0 (100+)
        </Content1>
        <Content2>
            월~금 09:00 ~ 19:00 | <span style={{color: 'gray'}} >{topic}</span>
        </Content2>
        <Content1>
            100m <span>| {place}</span>
        </Content1>
      </TitleWrapper>
      <ImageWrapper src={image} alt="image"/>
    </Container>
  );
};

export default Hospital;
