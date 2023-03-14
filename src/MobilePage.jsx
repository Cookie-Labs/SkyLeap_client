import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import MobileImg from '@assets/image/MobileImage.svg';

const MobileContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${colors.bgPrimary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const ErrorIll = styled.img`
  width: 50vw;
  height: 50vh;
`;

const Title = styled.span`
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 10px;
`

const Content = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: ${colors.textSecondary};
    margin-bottom: 10px;
`

const CopyButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  background-color: ${colors.primary80};
  border-radius: 10px;
  opacity: 0.8;

  &:hover {
    background-color: ${colors.primary40};
    opacity: 1;
  }
`;

const MobilePage = () => {
    const handleLinkCopy = () => {
        navigator.clipboard.writeText(document.location.href);
        alert('The link has been copied.');
    }

  return (
    <MobileContainer>
      <ErrorIll src={MobileImg} />
      <Title>Please access the PC version.</Title>
      <Content>Mobile version is being prepared...</Content>
      <CopyButton onClick={handleLinkCopy}>Copying a Link</CopyButton>
    </MobileContainer>
  );
};

export default MobilePage;
