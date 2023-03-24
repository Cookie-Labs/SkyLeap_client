import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import rafflixLogo from '@assets/logo/Rafflix_logo.svg';
import { FOOTER_W, FOOTER_H, FOOTER_MT } from '@constants/styleConst';
import { Link } from 'react-router-dom';
import { BsTwitter, BsTelegram, BsDiscord } from 'react-icons/bs';

const Container = styled.div`
  width: ${FOOTER_W};
  height: ${FOOTER_H}px;
  padding: 20px;
  background-color: ${colors.bgBlack};
  margin-top: ${FOOTER_MT}px;
`;

const LogoImage = styled.img`
  width: 70px;
`;

const EmojiWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const EmojiButton = styled.button`
  color: ${colors.textSecondary};
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: ${colors.textPrimary};
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const TextWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
`;

const FooterText = styled.span`
  color: ${colors.textSecondary};
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
      <rect width={1} height={12} fill={colors.textSecondary} />
    </svg>
  );
};

const Footer = () => {
  return (
    <Container>
      <TopWrapper>
        <Link to={'/'}>
          <LogoImage src={rafflixLogo} />
        </Link>
        <EmojiWrapper>
          <EmojiButton
            onClick={() => {
              window.open('https://twitter.com/');
            }}
          >
            <BsTwitter />
          </EmojiButton>
          <EmojiButton
            onClick={() => {
              window.open('https://telegram.org/?setln=ko');
            }}
          >
            <BsTelegram />
          </EmojiButton>
          <EmojiButton
            onClick={() => {
              window.open('https://discord.com/');
            }}
          >
            <BsDiscord />
          </EmojiButton>
        </EmojiWrapper>
      </TopWrapper>
      <TextWrapper>
        <FooterText>Hunter's Pot</FooterText>
      </TextWrapper>
      <TextWrapper>
        <FooterText>&copy; TTOT. 2023. All rights reserved</FooterText>
      </TextWrapper>
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
