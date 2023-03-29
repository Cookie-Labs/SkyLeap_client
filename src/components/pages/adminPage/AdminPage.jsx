import React, { useEffect } from 'react';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import { useNavigate, Outlet } from 'react-router-dom';
import { walletNotAdmin } from '@utils/toastMessage';
import AdminLayout from './layout/AdminLayout';

const AdminPage = () => {
  const navigate = useNavigate();
  const { account } = useRecoilValue(userState);

  useEffect(() => {
    if (account !== process.env.REACT_APP_CONTRACT_OWNER_ADDR) {
      walletNotAdmin();
      navigate(-1);
    }
  }, [account, navigate]);

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default AdminPage;
