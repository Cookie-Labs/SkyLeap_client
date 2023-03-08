import React from 'react';
import * as colors from '@styles/colors'
import styled from 'styled-components';

const TitleWrapper = styled.span`
  color: ${colors.textSecondary};
  font-size: 80px;
  font-weight: 900;
  padding: 15px 0px;
`;

const PageTitle = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default PageTitle;
