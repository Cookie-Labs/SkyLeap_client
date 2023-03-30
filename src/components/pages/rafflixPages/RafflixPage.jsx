import React from 'react';
import RafflixLayout from './layout/RafflixLayout';
import { Outlet } from 'react-router-dom';

const RafflixPage = () => {
  return (
    <RafflixLayout>
      <Outlet />
    </RafflixLayout>
  );
};

export default RafflixPage;
