import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import SearchLayout from '@components/articles/SearchLayout';
import { useLocation } from 'react-router-dom';
import { Items as items } from '@mock/items.js';
import { parse } from 'query-string';
import { APP_HEADER_H, APP_BOTTOM_H, FOOTER_H } from '@constants/styleConst';
import Hospitals from './search/Hospitals';

const Container = styled('div')`
  width: 100%;
  height: calc(100vh - ${APP_HEADER_H} - ${APP_BOTTOM_H} - ${FOOTER_H});
`;

const CategoryContainer = styled('div')`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const CategoryButton = styled('button')`
  font-size: 13px;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: ${({ isActive }) =>
    isActive ? `3px solid ${colors.bgPrimary}` : null};
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? colors.bgPrimary : colors.bgBlack)};
`;

const TitleWrapper = styled('div')`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-bottom: 10px solid lightgray;
`;

const QueryEmphasize = styled('span')`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.bgPrimary};
`;

const HospitalContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const SearchPage2 = () => {
  const [tab, setTab] = useState('전체');
  const location = useLocation();
  const parsed = parse(location.search);
  const typing = parsed.typing;
  const [typedItems, setTypedItems] = useState(items);

  useEffect(() => {
    const filterTitle = items.filter((q) => {
      return q.title
        .replace(' ', '')
        .toLocaleLowerCase()
        .includes(typing.toLocaleLowerCase());
    });
    setTypedItems(filterTitle);
  }, [typing]);

  return (
    <SearchLayout>
      <Container>
        <CategoryContainer>
          <CategoryButton
            isActive={tab === '전체'}
            value="전체"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            전체
          </CategoryButton>
          <CategoryButton
            isActive={tab === '산부인과'}
            value="산부인과"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            산부인과
          </CategoryButton>
          <CategoryButton
            isActive={tab === '유방/갑상선외과'}
            value="유방/갑상선외과"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            유방/갑상선외과
          </CategoryButton>
          <CategoryButton
            isActive={tab === '대장/항문외과'}
            value="대장/항문외과"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            대장/항문외과
          </CategoryButton>
          <CategoryButton
            isActive={tab === '피부과'}
            value="피부과"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            피부과
          </CategoryButton>
          <CategoryButton
            isActive={tab === '비뇨기의과'}
            value="비뇨기의과"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            비뇨기의과
          </CategoryButton>
          <CategoryButton
            isActive={tab === '정신과'}
            value="정신과"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            정신과
          </CategoryButton>
        </CategoryContainer>
        <TitleWrapper>
          ' <QueryEmphasize>{typing}</QueryEmphasize> ' 에 대한 검색 결과 총{' '}
          {typedItems.length}개
        </TitleWrapper>
        <HospitalContainer>
          {tab === '전체' ? (
            <Hospitals topic={typedItems} type="전체" />
          ) : tab === '산부인과' ? (
            <Hospitals topic={typedItems} type="산부인과" />
          ) : tab === '유방/갑상선외과' ? (
            <Hospitals topic={typedItems} type="유방/갑상선외과" />
          ) : tab === '대장/항문외과' ? (
            <Hospitals topic={typedItems} type="대장/항문외과" />
          ) : tab === '피부과' ? (
            <Hospitals topic={typedItems} type="피부과" />
          ) : tab === '비뇨기의과' ? (
            <Hospitals topic={typedItems} type="비뇨기의과" />
          ) : tab === '정신과' ? (
            <Hospitals topic={typedItems} type="정신과" />
          ) : null}
        </HospitalContainer>
      </Container>
    </SearchLayout>
  );
};

export default SearchPage2;
