import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { Badge, Tooltip, useTheme, useMediaQuery } from '@mui/material';
import { usePopover } from './usePopover';
import AccountPopover from './AccountPopover';
import { TOP_NAV_HEIGHT, SIDE_NAV_WIDTH } from './layoutConst';
import { BiMenu, BiSearchAlt, BiUserCircle, BiBell } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';

const TopBarContainer = styled.div`
  backdrop-filter: blur(6px);
  background-color: ${colors.bgTertiary};
  position: fixed;
  top: 0;
  left: ${(props) => (props.lgUp ? `${SIDE_NAV_WIDTH}px` : null)};
  width: ${(props) =>
    props.lgUp ? `calc(100vw - ${SIDE_NAV_WIDTH}px)` : '100vw'};
  z-index: 10;
`;

const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
  min-height: ${TOP_NAV_HEIGHT}px;
  padding: 0 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const IconButton = styled.button`
  cursor: pointer;
`;

const TobBar = ({ onNavOpen }) => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const accountPopover = usePopover();

  return (
    <>
      <TopBarContainer lgUp={lgUp}>
        <TopBarWrapper>
          <ButtonsWrapper>
            {!lgUp && (
              <IconButton onClick={onNavOpen}>
                <BiMenu size="30" color={colors.bgWhite} />
              </IconButton>
            )}
            <Tooltip title="Search">
              <IconButton>
                <BiSearchAlt size="30" color={colors.bgWhite} />
              </IconButton>
            </Tooltip>
          </ButtonsWrapper>
          <ButtonsWrapper>
            <Tooltip title="Contacts">
              <IconButton>
                <FiUsers size="30" color={colors.bgWhite} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <Badge badgeContent={4} color="success" variant="dot">
                  <BiBell size="30" color={colors.bgWhite} />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Account">
              <IconButton
                onClick={accountPopover.handleOpen}
                ref={accountPopover.anchorRef}
              >
                <BiUserCircle size="30" color={colors.bgWhite} />
              </IconButton>
            </Tooltip>
          </ButtonsWrapper>
        </TopBarWrapper>
      </TopBarContainer>
      <AccountPopover
        anchorEl={accountPopover.anchorRef.current}
        open={accountPopover.open}
        onClose={accountPopover.handleClose}
      />
    </>
  );
};

export default TobBar;
