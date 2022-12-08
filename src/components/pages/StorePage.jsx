import React from 'react';
import styled from 'styled-components';
import Layout from '@components/articles/Layout';

const TopWrapper = styled('div')`
  font-size: 20px;
  font-weight: 300;
`;

const StorePage = () => {
  return (
    <Layout>
      <TopWrapper>Store</TopWrapper>
    </Layout>
  );
};

export default StorePage;
