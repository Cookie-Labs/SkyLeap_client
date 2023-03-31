import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import * as colors from '@styles/colors';
import { TOP_NAV_HEIGHT } from './layoutConst';
import nftoolzLogo from '@assets/logo/NFToolZ_logo.svg';
import { BsFillLockFill, BsBagFill, BsTools } from 'react-icons/bs';
import { RiAuctionFill, RiTicketFill } from 'react-icons/ri';
import TopNavItem from './TopNavItem';

const TopBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
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

const LeftButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const RightButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  border: ${(props) => props.toolsOpen ? `1px solid ${colors.primary80}` : null};
  border-radius: 20px;
  padding: 9px;
`;

const LogoImage = styled.img`
  width: auto;
  height: 64px;
`;

const rotation = keyframes`
    from{
      box-shadow: none;
    }

    to{
        box-shadow: -1px -1px 3px 5px #ffbf69;
    }
`;

const NavButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #ffbf69;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
  color: ${colors.textPrimary};
  font-weight: 700;
  transform-origin: 50% 50%;
  animation: ${rotation} 1.5s linear infinite;

  &:hover {
    background-color: ${colors.bgQuaternary};
    width: 145px;
    height: 58px;
    transition: 0.3s;
  }
`;

const items = [
  {
    title: 'RAFFLES',
    path: '/rafflix/nftRaffles',
    icon: <RiTicketFill />,
  },
  {
    title: 'AUCTION',
    path: null,
    icon: <RiAuctionFill />,
  },
  {
    title: 'MARKET',
    path: null,
    icon: <BsBagFill />,
  },
  {
    title: 'STAKING',
    path: null,
    icon: <BsFillLockFill />,
  },
];

const TopBar = () => {
  const [toolsOpen, setToolsOpen] = useState(false);

  const handleToolsClick = () => {
    setToolsOpen(!toolsOpen);
  };

  return (
    <>
      <TopBarContainer>
        <TopBarWrapper>
          <LeftButtonsWrapper>
            <LogoImage
              src={nftoolzLogo}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </LeftButtonsWrapper>
          <RightButtonsWrapper toolsOpen={toolsOpen}>
            {toolsOpen &&
              items.map((item) => {
                return (
                  <TopNavItem
                    key={item.title}
                    icon={item.icon}
                    path={item.path}
                    title={item.title}
                    setToolsOpen={setToolsOpen}
                  />
                );
              })}
            <NavButton onClick={handleToolsClick}>
              <BsTools />
              TOOLS
            </NavButton>
          </RightButtonsWrapper>
        </TopBarWrapper>
      </TopBarContainer>
    </>
  );
};

export default TopBar;
