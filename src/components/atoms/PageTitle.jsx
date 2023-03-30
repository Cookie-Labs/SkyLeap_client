import React from 'react';
import * as colors from '@styles/colors'
import styled from 'styled-components';

const TitleWrapper = styled.span`
  width: 100%;
  height: auto;
  color: ${colors.textSecondary};
  font-size: 50px;
  font-weight: 900;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageTitle = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default PageTitle;
