import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import useRaffleLayer1 from '@hooks/useRaffleLayer1';
import useRaffleLayer2 from '@hooks/useRaffleLayer2';
import TransactionList from './TransactionList';
import SetLayer2 from './SetLayer2';

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 1px solid ${colors.bgWhite};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentWrapperBigSize = styled(ContentWrapper)`
  height: 700px;
`

const ContentTitle = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.bgWhite};
`;

const TransactionPage = () => {
  const { drawRaffleLayer1, announcementWinnerLayer1, presentRaffleLayer1 } =
    useRaffleLayer1();
  const {
    setRaffleLayer2,
    drawRaffleLayer2,
    announcementWinnerLayer2,
    presentRaffleLayer2,
  } = useRaffleLayer2();

  const [layer1Draw, setLayer1Draw] = useState([]);
  const [layer1Announce, setLayer1Announce] = useState([]);
  const [layer2Draw, setLayer2Draw] = useState([]);
  const [layer2Announce, setLayer2Announce] = useState([]);

  const setTokens = useCallback(() => {
    setLayer1Draw(
      presentRaffleLayer1.filter(
        (token) =>
          token.tokenStatus === '1' && token.tokenEndDate * 1000 <= Date.now(),
      ),
    );
    setLayer1Announce(
      presentRaffleLayer1.filter((token) => token.tokenStatus === '2'),
    );
    setLayer2Draw(
      presentRaffleLayer2.filter(
        (token) =>
          token.tokenStatus === '1' && token.tokenEndDate * 1000 <= Date.now(),
      ),
    );
    setLayer2Announce(
      presentRaffleLayer2.filter((token) => token.tokenStatus === '2'),
    );
  }, [presentRaffleLayer1, presentRaffleLayer2]);

  useEffect(() => {
    setTokens();
  }, [setTokens]);

  return (
    <ContentContainer>
      <ContentTitle>LAYER 1 DRAW</ContentTitle>
      <ContentWrapper>
        <TransactionList
          tokenList={layer1Draw}
          transactionFunc={drawRaffleLayer1}
        />
      </ContentWrapper>
      <ContentTitle>LAYER 1 ANNOUNCEMENT WINNER</ContentTitle>
      <ContentWrapper>
        <TransactionList
          tokenList={layer1Announce}
          transactionFunc={announcementWinnerLayer1}
        />
      </ContentWrapper>
      <ContentTitle>LAYER 2 DRAW</ContentTitle>
      <ContentWrapper>
        <TransactionList
          tokenList={layer2Draw}
          transactionFunc={drawRaffleLayer2}
        />
      </ContentWrapper>
      <ContentTitle>LAYER 2 ANNOUNCEMENT WINNER</ContentTitle>
      <ContentWrapper>
        <TransactionList
          tokenList={layer2Announce}
          transactionFunc={announcementWinnerLayer2}
        />
      </ContentWrapper>
      <ContentTitle>LAYER 2 SET</ContentTitle>
      <ContentWrapperBigSize>
        <SetLayer2 transactionFunc={setRaffleLayer2} />
      </ContentWrapperBigSize>
    </ContentContainer>
  );
};

export default TransactionPage;
