import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { APP_MAX_W, APP_HEADER_H } from '@constants/styleConst';
import { Link } from 'react-router-dom';
import SheGoLogo from '@assets/icon/SheGo_logo.svg';
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
  background-color: ${colors.bgPrimary};
  z-index: 999;
`;

const LogoImage = styled('img')`
  height: calc(${APP_HEADER_H} - 1rem);
  margin-right: 24px;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const EmojiButton = styled('img')`
  width: 25px;
  margin-left: 10px;
  color: ${colors.textPrimary};
`;

const Header = ({ page }) => {
  return (
    <Container>
      <Link to={'/main'}>
        <LogoImage src={SheGoLogo} />
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
