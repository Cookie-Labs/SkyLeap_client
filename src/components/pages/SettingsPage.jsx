import React from 'react';
import styled from 'styled-components';
import Layout from '@components/articles/Layout';

const TopWrapper = styled('div')`
  height: 100vh;
  font-size: 20px;
  font-weight: 300;
`;

const SettingsPage = () => {
  return (
    <Layout>
      <TopWrapper>Settings</TopWrapper>
    </Layout>
  );
};

export default SettingsPage;
