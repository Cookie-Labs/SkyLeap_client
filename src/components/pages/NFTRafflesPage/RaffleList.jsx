import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useRaffleLayer1 from '@hooks/useRaffleLayer1';
import Raffle from './Raffle';

const RafflesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px;
`;

const RaffleList = ({ type }) => {
  const { presentRaffleLayer1, pastRaffleLayer1 } = useRaffleLayer1();
  const [typeRaffleList, setTypeRaffleList] = useState([]);

  useEffect(() => {
    if (type === 'Present') {
      setTypeRaffleList(presentRaffleLayer1);
    } else if (type === 'Past') {
      setTypeRaffleList(pastRaffleLayer1);
    }
  }, [type, presentRaffleLayer1, pastRaffleLayer1]);

  return (
    <RafflesContainer>
      {typeRaffleList.map((token) => (
        <Raffle key={token.tokenId} token={token} />
      ))}
    </RafflesContainer>
  );
};

export default RaffleList;
