import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Layout from '@articles/Layout';
import PageTitle from '@atoms/PageTitle';
import MyNFTList from './MyNFTList';
import LoadingSpinner from '@atoms/LoadingSpinner';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { walletConnectError } from '@utils/toastMessage';

const TabNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

const TabButton = styled.button`
  width: 200px;
  height: 64px;
  font-size: 20px;
  cursor: pointer;
  margin: 3px;
  color: ${({ isActive }) =>
    isActive ? colors.primary80 : colors.textSecondary};
  border-bottom: 5px solid
    ${({ isActive }) => (isActive ? colors.primary80 : colors.bgPrimary)};

  &:hover {
    color: ${colors.primary80};
    border-bottom: 5px solid ${colors.primary80};
    transition: 0.3s;
  }
`;

const TicketsContainer = styled.div`
  width: 100%;
  min-height: 392px;
  border: 1px solid ${colors.bgWhite};
  border-radius: 10px;
  position: relative;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 46%;
  left: 46%;
`;

const MyPage = () => {
  const [tab, setTab] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { account } = useRecoilValue(userState);

  useEffect(() => {
    if (!account) {
      walletConnectError();
      navigate(-1);
    }
  }, [account, navigate]);

  setTimeout(() => {
    setIsLoading(false);
  }, 2500);

  return (
    <Layout page="my-page">
      <PageTitle>MY PAGE</PageTitle>
      <TabNavigation>
        <TabButton
          isActive={tab === 'All'}
          value="All"
          onClick={(newTab) => {
            setTab(newTab.target.value);
          }}
        >
          All
        </TabButton>
        <TabButton
          isActive={tab === 'InProgress'}
          value="InProgress"
          onClick={(newTab) => {
            setTab(newTab.target.value);
          }}
        >
          In Progress
        </TabButton>
        <TabButton
          isActive={tab === 'NotInProgress'}
          value="NotInProgress"
          onClick={(newTab) => {
            setTab(newTab.target.value);
          }}
        >
          Not In Progress
        </TabButton>
      </TabNavigation>
      <TicketsContainer>
        {isLoading ? (
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        ) : tab === 'All' ? (
          <MyNFTList type="All" />
        ) : tab === 'InProgress' ? (
          <MyNFTList type="InProgress" />
        ) : tab === 'NotInProgress' ? (
          <MyNFTList type="NotInProgress" />
        ) : null}
      </TicketsContainer>
    </Layout>
  );
};

export default MyPage;
