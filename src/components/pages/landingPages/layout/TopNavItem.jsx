import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ButtonWrapper = styled.button`
  cursor: pointer;
  width: 9rem;
  height: 3rem;
  border-radius: 10px;
  background-color: ${colors.primary80};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.textPrimary}; 

  &:hover {
    background-color: 
  }
`;

const TopNavItem = ({ path, icon, title, setToolsOpen }) => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    setToolsOpen(false);
    if (path === null) {
      toast.warn('Coming Soon...', {
        autoClose: 1500,
      });
    } else {
      navigate(path);
    }
  };

  return (
    <ButtonWrapper onClick={handleClickButton}>
      {icon && <>{icon}</>}
      <>{title}</>
    </ButtonWrapper>
  );
};

export default TopNavItem;
