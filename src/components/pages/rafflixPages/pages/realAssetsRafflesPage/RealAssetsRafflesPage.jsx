import React, { useState, useEffect, useRef } from 'react';
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
import RealAssetsList from './RealAssetsList';
import useRaffleLayer2 from '@hooks/useRaffleLayer2';

const sortItems = [
  {
    type: 'Newly Registered',
  },
  {
    type: 'Previously Registered',
  },
  {
    type: 'Expiring Soon',
  },
  {
    type: 'Price: Low to High',
  },
  {
    type: 'Price: High to Low',
  },
  // {
  //   type: 'Floor: Low to High',
  // },
  // {
  //   type: 'Floor: High to Low',
  // },
];

const ButtonsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 10px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const LeftButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11rem;
  height: 2.5rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${colors.textPrimary};
  border: 2px solid ${colors.bgQuaternary};
  border-radius: 1rem;
  background-color: ${({ isActive }) =>
    isActive ? colors.secondary80 : colors.bgTertiary};

  &:hover {
    background-color: ${colors.secondary40};
    transition: 0.3s;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 12rem;
  height: 2rem;
`;

const SearchTerm = styled.input`
  width: 80%;
  height: 100%;
  border: 2px solid ${colors.bgQuaternary};
  border-left: none;
  padding: 5px;
  border-radius: 0 10px 10px 0;
  color: ${colors.textPrimary};
  font-size: 1rem;
  cursor: pointer;
  background-color: ${colors.bgTertiary};

  &:hover {
    background-color: ${colors.bgQuaternary};
    transition: 0.3s;
  }

  &:focus {
    width: 150%;
    outline: none;
    border: 1px solid ${colors.secondary80};
    box-shadow: 0 0 10px ${colors.secondary40};
  }
`;

const SearchButton = styled.div`
  width: 3rem;
  height: 100%;
  border: 2px solid ${colors.bgQuaternary};
  background-color: ${colors.bgTertiary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textPrimary};
  font-size: 1.5rem;
  border-radius: 10px 0 0 10px;
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

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuHeadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 10rem;
  height: 2rem;
  font-size: 0.8rem;
  cursor: pointer;
  gap: 0.5rem;
  border: ${(props) =>
    props.isOpen ? null : `2px solid ${colors.bgQuaternary}`};
  border-radius: ${(props) => (props.isOpen ? '10px 10px 0 0' : '10px')};
  background-color: ${(props) =>
    props.isOpen ? colors.secondary80 : colors.bgTertiary};
  color: ${colors.textPrimary};

  &:hover {
    background-color: ${colors.secondary40};
    transition: 0.3s;
  }
`;

const MenuContentWrapper = styled.div`
  position: absolute;
  z-index: 5;
  top: 100%;
  left: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 10rem;
  min-height: 4rem;
  padding: 0.4rem;
  border: 2px solid ${colors.bgQuaternary};
  border-radius: 0 0 10px 10px;
  background-color: ${colors.bgTertiary};
  transition: 2s ease-in-out;
`;

const MenuItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8rem;
  color: ${colors.bgWhite};
  cursor: pointer;

  &:hover {
    color: ${colors.secondary80};
    transition: 0.3s;
  }
`;

const MenuApplyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 1.5rem;
  font-size: 0.8rem;
  background-color: ${colors.secondary80};
  color: ${colors.bgQuaternary};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: ${colors.textPrimary};
    transition: 0.3s;
  }
`;

const RealAssetsRafflesPage = () => {
  const [tab, setTab] = useState('Present');
  const [isLoading, setIsLoading] = useState(true);
  const { presentRaffleLayer2, pastRaffleLayer2 } = useRaffleLayer2();

  const [searchText, setSearchText] = useState('');
  const [sortTab, setSortTab] = useState(sortItems[0].type);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isToggleOpen = useRef(null);

  setTimeout(() => {
    setIsLoading(false);
  }, 2500);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isToggleOpen.current &&
        !isToggleOpen.current.contains(event.target)
      ) {
        setIsSortOpen(false);
        setIsFilterOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
    };
  }, [isToggleOpen]);

  return (
    <Column alignItems="center" ref={isToggleOpen}>
      <PageTitle>REAL ASSETS RAFFLES</PageTitle>
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
          <SearchBarContainer>
            <SearchButton>
              <BiSearch />
            </SearchButton>
            <SearchTerm
              type="text"
              id="SearchInput"
              placeholder="Search Raffles"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onKeyUp={(e) => {
                if (window.event.keyCode === 13) {
                  setSearchText(e.target.value);
                }
              }}
            />
          </SearchBarContainer>
          <MenuContainer onClick={() => setIsSortOpen((prev) => !prev)}>
            <MenuHeadButton isOpen={isSortOpen}>
              <BiSort size="1rem" />
              {sortTab}
            </MenuHeadButton>
            {isSortOpen && (
              <MenuContentWrapper>
                {sortItems.map((item) => {
                  return (
                    <MenuItemButton
                      key={item.type}
                      value={item.type}
                      onClick={(newTab) => {
                        setSortTab(newTab.target.value);
                      }}
                    >
                      {item.type}
                    </MenuItemButton>
                  );
                })}
              </MenuContentWrapper>
            )}
          </MenuContainer>
          <MenuContainer>
            <MenuHeadButton
              isOpen={isFilterOpen}
              onClick={() => setIsFilterOpen((prev) => !prev)}
            >
              <BiFilterAlt size="1rem" />
              Filter
            </MenuHeadButton>
            {isFilterOpen && (
              <MenuContentWrapper>
                <MenuItemButton>Token</MenuItemButton>
                <MenuItemButton>Collection</MenuItemButton>
                <MenuItemButton>Floor</MenuItemButton>
                <MenuApplyButton onClick={() => setIsFilterOpen(false)}>
                  APPLY
                </MenuApplyButton>
              </MenuContentWrapper>
            )}
          </MenuContainer>
        </ButtonsWrapper>
      </ButtonsContainer>
      <RafflesContainer>
        {isLoading ? (
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        ) : tab === 'Present' ? (
          <RealAssetsList
            tokenList={presentRaffleLayer2}
            searchText={searchText}
            sortType={sortTab}
          />
        ) : tab === 'Past' ? (
          <RealAssetsList
            tokenList={pastRaffleLayer2}
            searchText={searchText}
            sortType={sortTab}
          />
        ) : null}
      </RafflesContainer>
    </Column>
  );
};

export default RealAssetsRafflesPage;
