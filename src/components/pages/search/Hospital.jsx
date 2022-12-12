import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import useHover from '@hooks/useHover';
import { Link } from 'react-router-dom';

const Container = styled('div')`
  width: auto;
  height: auto;
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
`;

const ImageWrapper = styled('img')`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const HoverWrapper = styled('div')`
  width: 38%;
  height: 13%;
  position: absolute;
`;

const ButtonWrapper = styled('button')`
  width: 100%;
  height: 100%;
  font-size: 20px;
  cursor: pointer;
  border-radius: 5px;
  margin: 3px;
`;

const Hospital = ({ id, topic, image, title, place, doctor }) => {
  const [hoverRef, isHover] = useHover();

  return (
    <Container key={id} ref={hoverRef}>
      {isHover && (
        <HoverWrapper>
          <Link
            to={{
              pathname: '/detail',
              search: `?id=${id}`,
            }}
          >
            <ButtonWrapper />
          </Link>
        </HoverWrapper>
      )}
      <TitleWrapper>
        <Title>{title}</Title>
        <Content1>
          <span style={{ color: colors.bgPrimary, fontWeight: '800' }}>
            여성
          </span>{' '}
          의료진: {doctor === 'only' ? '단독' : `${doctor}명`} | ⭐ 5.0 (100+)
        </Content1>
        <Content2>
          월~금 09:00 ~ 19:00 | <span style={{ color: 'gray' }}>{topic}</span>
        </Content2>
        <Content1>
          100m <span>| {place}</span>
        </Content1>
      </TitleWrapper>
      <ImageWrapper src={image} alt="image" />
    </Container>
  );
};

export default Hospital;
