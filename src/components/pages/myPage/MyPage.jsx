import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Layout from '@articles/Layout';

const TitleWrapper = styled.span`
  color: ${colors.textSecondary};
  font-size: 80px;
  font-weight: 900;
  padding-top: 15px;
`;

const MyPage = () => {
  return (
    <Layout page="my-page">
      <TitleWrapper>MY PAGE</TitleWrapper>
    </Layout>
  );
};

export default MyPage;
