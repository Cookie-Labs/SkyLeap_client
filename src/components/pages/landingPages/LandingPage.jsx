import React from 'react';
import LandingLayout from './layout/LandingLayout';
import HeroArea from './pages/landingComponents/HeroArea';

const LandingPage = () => {
  return (
    <LandingLayout>
      <HeroArea/>
    </LandingLayout>
  );
};

export default LandingPage;
