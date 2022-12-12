import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { APP_MAX_W, APP_HEADER_H } from '@constants/styleConst';
import { Link } from 'react-router-dom';
import { BiArrowBack, BiMap, BiMapAlt, BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Container = styled('div')`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${APP_MAX_W};
  height: ${APP_HEADER_H};
  padding: 0 15px;
  background-color: ${colors.bgSecondary};
  z-index: 999;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  height: calc(${APP_HEADER_H} - 1rem);
  gap: 5px;
`;

const SearchBarContainer = styled('div')`
  display: flex;
  width: 70%;
  height: calc(${APP_HEADER_H} - 3rem);
  align-items: center;
`;

const SearchTerm = styled('input')`
  width: 100%;
  height: 100%;
  background-color: ${colors.bgWhite};
  border-left: none;
  padding: 5px;
  border-radius: 0 5px 5px 0;
  outline: none;
  font-size: 15px;
  color: ${colors.textBlack};
  border: 1px solid ${colors.bgSecondary};
`;

const SearchButton = styled('button')`
  width: 10%;
  height: 100%;
  border: 1px solid ${colors.bgSecondary};
  background: ${colors.bgWhite};
  text-align: center;
  justify-content: center;
  color: white;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
`;

const Divider = () => {
  return (
    <svg
      width={5}
      height={25}
      viewBox="0 0 1 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={5} height={25} fill={colors.textPrimary} />
    </svg>
  );
};

const SearchHeader = ({ page }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  return (
    <Container>
      <ButtonWrapper>
        <Link to={'/main'}>
          <BiArrowBack size="2rem" color="white" />
        </Link>
      </ButtonWrapper>
      <SearchBarContainer>
        <SearchButton
          type="submit"
          onClick={() => {
            navigate({ pathname: '/search2', search: `?typing=${query}` });
          }}
          value={query}
        >
          <BiSearch size="1.4rem" color={colors.bgSecondary} />
        </SearchButton>
        <SearchTerm
          type="text"
          placeholder="병원명, 진료과, 지역"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyUp={() => {
            // 엔터키를 눌렀을 때에
            if (window.event.keyCode === 13) {
              navigate({ pathname: '/search2', search: `?typing=${query}` });
            }
          }}
        />
      </SearchBarContainer>
      <ButtonWrapper>
        <BiMap size="2rem" color="white" />
        <Divider />
        <BiMapAlt size="2rem" color="white" />
      </ButtonWrapper>
    </Container>
  );
};

export default SearchHeader;
