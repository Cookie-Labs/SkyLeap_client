import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ButtonWrapper = styled.button`
  cursor: pointer;
  width: 150px;
  height: 60px;
  border-radius: 10px;
  border: 2px dashed #ffbf69;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
  color: ${colors.textPrimary};
  font-weight: 700;
`;

const TopNavItem = ({ path, icon, title }) => {
  const navigate = useNavigate();

  const handleClickButton = () => {
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
