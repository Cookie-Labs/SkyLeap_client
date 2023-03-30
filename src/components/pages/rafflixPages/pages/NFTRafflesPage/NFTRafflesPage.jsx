import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { Column } from '@atoms/wrapper.style';
import PageTitle from '@atoms/PageTitle';
import {
  BiPieChart,
  BiHistory,
  BiSearch,
  BiFilterAlt,
  BiSort,
} from 'react-icons/bi';
import LoadingSpinner from '@atoms/LoadingSpinner';
import RaffleList from './RaffleList';
import useRaffleLayer1 from '@hooks/useRaffleLayer1';


const ButtonsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LeftButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  font-size: 17px;
  cursor: pointer;
  color: ${colors.textPrimary};
  border: 2px solid ${colors.bgQuaternary};
  border-radius: 20px;
  background-color: ${({ isActive }) =>
    isActive ? colors.primary80 : colors.bgTertiary};

  &:hover {
    background-color: ${colors.primary40};
    transition: 0.3s;
  }
`;

const RightButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 40px;
  font-size: 17px;
  cursor: pointer;
  color: ${colors.textPrimary};
  border: 2px solid ${colors.bgQuaternary};
  border-radius: 10px;
  background-color: ${colors.bgTertiary};

  &:hover {
    background-color: ${colors.bgQuaternary};
    transition: 0.3s;
  }
`;

const RafflesContainer = styled.div`
  width: 100%;
  min-height: 560px;
  border: 3px solid ${colors.bgQuaternary};
  border-radius: 10px;
  position: relative;
  background-color: ${colors.bgSecondary};
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 46%;
  left: 46%;
`;

const NFTRafflesPage = () => {
  const [tab, setTab] = useState('Present');
  const [isLoading, setIsLoading] = useState(true);
  const { presentRaffleLayer1, pastRaffleLayer1 } = useRaffleLayer1();

  setTimeout(() => {
    setIsLoading(false);
  }, 2500);

  return (
    <Column alignItems="center">
      <PageTitle>NFT RAFFLES</PageTitle>
      <ButtonsContainer>
        <ButtonsWrapper>
          <LeftButton
            isActive={tab === 'Present'}
            value="Present"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            <BiPieChart />
            {'\u00a0'}
            PRESENT RAFFLES
          </LeftButton>
          <LeftButton
            isActive={tab === 'Past'}
            value="Past"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            <BiHistory />
            {'\u00a0'}
            PAST RAFFLES
          </LeftButton>
        </ButtonsWrapper>
        <ButtonsWrapper>
          <RightButton>
            <BiSearch />
            {'\u00a0'}
            Search Raffles
          </RightButton>
          <RightButton>
            <BiFilterAlt />
            {'\u00a0'}
            Filters / Sort
            {'\u00a0'}
            <BiSort />
          </RightButton>
        </ButtonsWrapper>
      </ButtonsContainer>
      <RafflesContainer>
        {isLoading ? (
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        ) : tab === 'Present' ? (
          <RaffleList tokenList={presentRaffleLayer1} />
        ) : tab === 'Past' ? (
          <RaffleList tokenList={pastRaffleLayer1} />
        ) : null}
      </RafflesContainer>
    </Column>
  );
};

export default NFTRafflesPage;
