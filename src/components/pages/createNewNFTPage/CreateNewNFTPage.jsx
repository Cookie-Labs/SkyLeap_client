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

const CreateNewNFTPage = () => {
  return (
    <Layout page="create-new-nft-page">
        <TitleWrapper>CREATE NEW NFT</TitleWrapper>
    </Layout>
  )
};

export default CreateNewNFTPage;
