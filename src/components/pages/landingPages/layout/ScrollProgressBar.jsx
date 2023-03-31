import React from 'react';
import { motion } from 'framer-motion';
import * as colors from '@styles/colors';
import {TOP_NAV_HEIGHT} from './layoutConst';

const ScrollProgressBar = ({ scaleX }) => {
  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: `calc(${TOP_NAV_HEIGHT}px - 5px)`,
        left: 0,
        right: 0,
        height: '5px',
        background: `${colors.primary40}`,
        transformOrigin: '0%',
        zIndex: 1000,
      }}
    />
  );
};

export default ScrollProgressBar;
