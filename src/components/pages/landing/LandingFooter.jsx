import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '@styles/colors';
import { FOOTER_H} from '@constants/styleConst';
import SheitLogo from '@assets/icon/Sheit_logo.png';
import { BsTwitter, BsYoutube, BsDiscord } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Container = styled('div')`
  width: 100%;
  height: ${FOOTER_H};
  padding: 0 20px;
  background-color: ${colors.primary35};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const LogoImage = styled('img')`
  width: 70px;
  margin-right: 24px;
`;

const EmojiWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const EmojiButton = styled('button')`
  color: ${colors.primary20};
  font-size: 30px;
  cursor: pointer;
`;

const FooterHeadContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const FooterTextContainer = styled('div')`
  display: flex;
  gap: 12px;
  margin-bottom: 5px;
`;

const FooterText = styled.span`
  color: ${colors.textSecondary};
  font-size: 12px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  margin-top: 15px;
  padding-bottom: 5px;
`;

const Divider = () => {
  return (
    <svg
      width={1}
      height={12}
      viewBox="0 0 1 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={1} height={12} fill={colors.primary70} />
    </svg>
  );
};

const Footer = () => {
  return (
    <Container>
      <FooterHeadContainer>
        <Link to={'/'}>
          <LogoImage src={SheitLogo} />
        </Link>
        <EmojiWrapper>
          <EmojiButton
            onClick={() => {
              window.open('https://instagram.com/gachoncocone/');
            }}
          >
            <AiFillInstagram />
          </EmojiButton>
          <EmojiButton
            onClick={() => {
              window.open('https://twitter.com/');
            }}
          >
            <BsTwitter />
          </EmojiButton>
          <EmojiButton
            onClick={() => {
              window.open('https://www.youtube.com/');
            }}
          >
            <BsYoutube />
          </EmojiButton>
          <EmojiButton
            onClick={() => {
              window.open('https://discord.com/');
            }}
          >
            <BsDiscord />
          </EmojiButton>
        </EmojiWrapper>
      </FooterHeadContainer>
      <FooterTextContainer>
        <FooterText>코코네 스쿨 1기</FooterText>
        <FooterText>Hunter's Pot</FooterText>
      </FooterTextContainer>
      <FooterTextContainer>
        <FooterText>📧Email: Hunters-Pot@gmail.com</FooterText>
        <FooterText>📱Phone: 010-9947-3665</FooterText>
      </FooterTextContainer>
      <FooterTextContainer>
        <FooterText>&copy; SHEIT. 2022. All rights reserved</FooterText>
      </FooterTextContainer>
      <FooterLinks>
        <FooterText>이용약관</FooterText>
        <Divider />
        <FooterText>개인정보처리방침</FooterText>
        <Divider />
        <FooterText>자주묻는질문</FooterText>
      </FooterLinks>
    </Container>
  );
};

export default Footer;
