import React from 'react';
import styled from 'styled-components';
import Layout from '@articles/Layout';
import { Column } from '@atoms/wrapper.style';
import SheitLogo from '@assets/icon/Sheit_logo.png';
import NLoginImage from '@assets/image/Naver_login.png';
import KLoginImage from '@assets/image/Kakao_login.png';
import { Link } from 'react-router-dom';

const Container = styled(Column)`
  width: 100%;
  height: 100vh;
  align-items: center;
`;

const LogoWrapper = styled('img')`
  height: 300px;
`;

const TextWrapper = styled('span')`
  font-size: 50px;
  font-weight: 900;
`;

const ImageWrpper = styled('img')`
  width: 200px;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

const LinkWrapper = styled('div')`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
`;

const LoginPage = () => {
  return (
    <Layout>
      <Container>
        <Link to={'/main'}>
          <LogoWrapper src={SheitLogo} />
        </Link>
        <TextWrapper>SHEIT</TextWrapper>
        <ImageWrpper src={NLoginImage} />
        <ImageWrpper src={KLoginImage} />
        <LinkWrapper>다른 계정으로 로그인하기</LinkWrapper>
      </Container>
    </Layout>
  );
};

export default LoginPage;
