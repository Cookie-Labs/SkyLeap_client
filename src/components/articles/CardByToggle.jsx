import React, { useState } from 'react';
import styled from 'styled-components';
import { Column } from '@atoms/wrapper.style';
import * as colors from '@styles/colors';
import { lg, sm } from '@styles/GlobalStyle';
import { AiOutlineCaretUp } from 'react-icons/ai';

const CardContainer = styled(Column)`
  border: 3px solid
    ${(props) => (props.isOpened ? colors.bgBlack : colors.primary40)};
  border-radius: 10px;
  white-space: wrap;
  margin: 10px;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  height: auto;

  &:hover {
    background-color: ${(props) => !props.isOpened && colors.primary40};
  }

  ${lg`
    margin: 1.4rem 4rem;
    border-radius: 1.4rem;
  `}

  ${sm`
    margin: 1.3rem 3rem;
    border-radius: 1.2rem;
  `}
`;

const TitleContainer = styled(Column)`
  line-height: 150%;
  width: 100%;
  height: 100%;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 1.5rem;
  font-size: 1.7rem;
  flex-direction: row;

  ${lg`
    font-size: 1.9rem;
  `}

  ${sm`
    font-size: 1.7rem;
  `}
`;

const Emphasis = styled('span')`
  font-size: 2rem;
  font-weight: 700;
`;

const ToggleButton = styled(AiOutlineCaretUp)`
  transition: 0.3s;
  transform: ${(props) =>
    !props.isOpened ? 'rotate(90deg)' : 'rotate(180deg)'};
  color: ${colors.bgPrimary};
  margin: 4px;
`;

const CardByToggle = ({ title, children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <CardContainer isOpened={isOpened}>
      <TitleContainer onClick={() => setIsOpened((prev) => !prev)}>
        <div>
          <Emphasis>Q. </Emphasis>
          {title}
        </div>
        <ToggleButton isOpened={isOpened} />
      </TitleContainer>
      {isOpened && children}
    </CardContainer>
  );
};

export default CardByToggle;
