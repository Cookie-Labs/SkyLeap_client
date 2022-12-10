import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { APP_MAX_W, APP_HEADER_H } from '@constants/styleConst';
import { Link } from 'react-router-dom';
import SheitLogo from '@assets/icon/Sheit_logo.png';
import BellImage from '@assets/icon_button/bell_on.svg';
import CartImage from '@assets/icon_button/shopping_cart.svg';
import SettingImage from '@assets/icon_button/settings.svg';

const Container = styled('div')`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${APP_MAX_W};
  height: ${APP_HEADER_H};
  padding: 0 15px;
  background-color: ${colors.primary70};
  z-index: 999;
  border-bottom: 1px solid ${colors.primary35};
`;

const LogoImage = styled('img')`
  width: 130px;
  margin-right: 24px;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const EmojiButton = styled('img')`
  width: 25px;
  margin-left: 10px;
`;

const Header = ({ page }) => {
  return (
    <Container>
      <Link to={'/main'}>
        <LogoImage src={SheitLogo} />
      </Link>
      <ButtonWrapper>
        <Link to={'/notification'}>
          <EmojiButton src={BellImage} />
        </Link>
        <Link to={'/cart'}>
          <EmojiButton src={CartImage} />
        </Link>
        <Link to={'/settings'}>
          <EmojiButton src={SettingImage} />
        </Link>
      </ButtonWrapper>
    </Container>
  );
};

export default Header;
