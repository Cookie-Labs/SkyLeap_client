import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { APP_MAX_W, APP_BOTTOM_H } from '@constants/styleConst';
import { Link } from 'react-router-dom';
import HomeImage from '@assets/icon_button/home.svg';
import SearchImage from '@assets/icon_button/search.svg';
import PeopleImage from '@assets/icon_button/people.svg';
import CalendarImage from '@assets/icon_button/calendar.svg';
import UserImage from '@assets/icon_button/user.svg';

const Container = styled('div')`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${APP_MAX_W};
  height: ${APP_BOTTOM_H};
  bottom: 0;
  z-index: 999;
  background-color: ${colors.bgWhite};
  border-top: 2px solid ${colors.bgPrimary};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
`;

const EmojiButton = styled('img')`
  width: 30px;
`;

const TextWrapper = styled('span')`
  color: ${colors.primary35};
  font-size: 10px;
`;

const Bottom = () => {
  return (
    <Container>
      <Link to={'/main'} style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <EmojiButton src={HomeImage} />
          <TextWrapper>홈</TextWrapper>
        </ButtonWrapper>
      </Link>
      <Link to={'/search'} style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <EmojiButton src={SearchImage} />
          <TextWrapper>검색</TextWrapper>
        </ButtonWrapper>
      </Link>
      <Link to={'/community'} style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <EmojiButton src={PeopleImage} />
          <TextWrapper>커뮤니티</TextWrapper>
        </ButtonWrapper>
      </Link>
      <Link to={'/calendar'} style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <EmojiButton src={CalendarImage} />
          <TextWrapper>캘린더</TextWrapper>
        </ButtonWrapper>
      </Link>
      <Link to={'/mypage'} style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <EmojiButton src={UserImage} />
          <TextWrapper>마이페이지</TextWrapper>
        </ButtonWrapper>
      </Link>
    </Container>
  );
};

export default Bottom;
