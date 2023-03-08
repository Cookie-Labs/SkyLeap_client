import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Layout from '@articles/Layout';
import useNFT from '@hooks/useNFT';
import PageTitle from '@atoms/PageTitle';

const MyPage = () => {
  return (
    <Layout page="my-page">
      <PageTitle>MY PAGE</PageTitle>
    </Layout>
  );
};

export default MyPage;
