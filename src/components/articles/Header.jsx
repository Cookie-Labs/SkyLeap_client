import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import rafflixLogo from '@assets/logo/Rafflix_logo.svg';
import { APP_HEADER_H, APP_MAX_W } from '@constants/styleConst';
import { Link } from 'react-router-dom';
import {
  HiOutlineTicket,
  HiOutlineShoppingBag,
  HiOutlinePlusCircle,
} from 'react-icons/hi';
import ConnectWallet from '@articles/ConnectWallet';
import MyBalance from '@articles/MyBalance';

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${APP_MAX_W}px;
  height: ${APP_HEADER_H}px;
  background-color: ${colors.bgPrimary};
  border-bottom: solid 1px ${colors.bgWhite};
  z-index: 999;
`;

const LogoImage = styled.img`
  width: 200px;
  margin-right: 24px;

  &:hover {
    width: 190px;
    transition: 0.3s;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

const ButtonWrapper = styled(Link)`
  height: 60px;
  width: 150px;
  padding: 5px;
  font-size: 15px;
  text-align: center;
  background-color: ${(props) => props.color};
  color: ${colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  text-decoration: none;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    color: ${colors.textPrimary};
    transition: 0.3s;
    box-shadow: 0 0 5px ${(props) => props.color},
      0 0 10px ${(props) => props.color}, 0 0 20px ${(props) => props.color},
      0 0 40px ${(props) => props.color};
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);
  }
`;

const Header = ({ page }) => {
  return (
    <Container>
      <Link to={'/'}>
        <LogoImage src={rafflixLogo} />
      </Link>
      <ButtonsContainer>
        <ButtonWrapper to="/" color={colors.primary80}>
          <HiOutlineTicket size="30" />
          <span>
            NFT
            <br /> RAFFLES
          </span>
        </ButtonWrapper>
        <ButtonWrapper to="/realAssetsRaffles" color={colors.secondary80}>
          <HiOutlineShoppingBag size="30" />
          <span>
            REAL ASSETS
            <br /> RAFFLES
          </span>
        </ButtonWrapper>
        <ButtonWrapper to="/createRaffle" color={colors.tertiary80}>
          <HiOutlinePlusCircle size="30" />
          <span>
            CREATE NEW
            <br /> RAFFLES
          </span>
        </ButtonWrapper>
        <ConnectWallet/>
        <MyBalance/>
      </ButtonsContainer>
    </Container>
  );
};

export default Header;
