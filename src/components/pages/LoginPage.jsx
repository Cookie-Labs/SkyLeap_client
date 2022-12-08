import React from 'react';
import styled from 'styled-components';
import Layout from '@articles/Layout';
import { Column } from '@atoms/wrapper.style';
import SheitLogo from '@assets/icon/Sheit_logo.png';
import NLoginImage from '@assets/image/Naver_login.png';
import KLoginImage from '@assets/image/Kakao_login.png';
import { Link } from 'react-router-dom';

const LogoWrapper = styled('img')`
  height: 300px;
`;

const TextWrapper = styled('span')`
  font-size: 50px;
  font-weight: 900;
`;

const ImageWrpper = styled('img')`
  width: 300px;
  margin-top: 30px;
  cursor: pointer;
`;

const LinkWrapper = styled('div')`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 30px;
`;

const LoginPage = () => {
  return (
    <Layout>
      <Column justifyContent="center" alignItems="center">
        <Link to={'/main'}>
          <LogoWrapper src={SheitLogo} />
        </Link>
        <TextWrapper>SHEIT</TextWrapper>
        <ImageWrpper src={NLoginImage} />
        <ImageWrpper src={KLoginImage} />
        <LinkWrapper>다른 계정으로 로그인하기</LinkWrapper>
      </Column>
    </Layout>
  );
};

export default LoginPage;
