import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { useNavigate } from 'react-router-dom';
import { ButtonBase } from '@mui/material';

const ButtonWrapper = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) =>
    props.disabled
      ? `${colors.textBlack}`
      : props.active
      ? props.activeColor
      : `${colors.bgWhite}`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideNavItem = ({
  active = false,
  activeColor,
  path,
  disabled,
  icon,
  title,
}) => {
  const navigate = useNavigate();

  return (
    <ButtonBase
      sx={{
        alignItems: 'center',
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        pl: '16px',
        pr: '16px',
        py: '6px',
        textAlign: 'left',
        width: '100%',
        gap: '20px',
        ...(active && {
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
        }),
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
        },
      }}
      onClick={() => {
        navigate(path);
      }}
    >
      {icon && (
        <ButtonWrapper
          active={active}
          disabled={disabled}
          activeColor={activeColor}
        >
          {icon}
        </ButtonWrapper>
      )}
      <ButtonWrapper
        active={active}
        disabled={disabled}
        activeColor={activeColor}
      >
        {title}
      </ButtonWrapper>
    </ButtonBase>
  );
};

export default SideNavItem;
