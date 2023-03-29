import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAccount, userWalletType, userNetworkId } from '@states/userState';
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from '@mui/material';

const AccountPopover = ({anchorEl, onClose, open}) => {
  const navigate = useNavigate();
  const setAccount = useSetRecoilState(userAccount);
  const setWalletType = useSetRecoilState(userWalletType);
  const setNetworkId = useSetRecoilState(userNetworkId);

  const handleSignOut = useCallback(() => {
    onClose?.();
    setAccount('');
    setWalletType('');
    setNetworkId('');
    localStorage.removeItem('_user');
    localStorage.removeItem('_wallet');
    navigate('/');
  }, [onClose, setAccount, setWalletType, setNetworkId, navigate]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          Owner
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};

export default AccountPopover;
