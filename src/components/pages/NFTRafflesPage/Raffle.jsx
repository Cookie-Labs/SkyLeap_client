import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { BiTimer } from 'react-icons/bi';

const TokenWrapper = styled.div`
  width: auto;
  height: 500px;
  border: 1px solid ${colors.bgWhite};
  border-radius: 15px;
  background-color: ${colors.bgTertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const TokenImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: fill;
  object-position: top;
  border-radius: 15px 15px 0 0;
  border-bottom: 1px solid ${colors.bgWhite};
`;

const TokenTitle = styled.div`
  width: 100%;
  height: 10%;
  font-size: 20px;
  font-weight: 800;
  color: ${colors.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TokenEndDate = styled.div`
  width: 100%;
  height: 7%;
  font-size: 20px;
  font-weight: 500;
  color: ${colors.primary40};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TicketsInfoTitle = styled.div`
  width: 100%;
  height: 7%;
  font-size: 15px;
  font-weight: 500;
  color: ${colors.primary40};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
`;

const TicketInfo = styled.div`
  width: 100%;
  height: 7%;
  font-size: 17px;
  font-weight: 500;
  color: ${colors.textPrimary};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 10%;
`;

const ViewRaffleButton = styled.button`
  width: 80%;
  height: 8%;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.textBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid ${colors.bgWhite};
  background-color: ${colors.primary40};
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary80};
    transition: 0.3s;
  }
`;

const Raffle = ({ token }) => {
  const navigate = useNavigate();
  const [adjustedEndDate, setAdjustedEndDate] = useState('');

  const {
    tokenId,
    tokenImage,
    tokenName,
    tokenEndDate,
    tokenTicketSupply,
    tokenTicketPrice,
    tokenParticipatedList,
  } = token;

  useEffect(() => {
    const RemainingMilisec = tokenEndDate * 1000 - Date.now();
    if (RemainingMilisec > 0) {
      const RemainingMin = Math.floor((RemainingMilisec / (1000 * 60)) % 60);
      const RemainingHour = Math.floor(
        (RemainingMilisec / (1000 * 60 * 60)) % 24,
      );
      const RemainingDay = Math.floor(RemainingMilisec / (1000 * 60 * 60 * 24));

      setAdjustedEndDate(`${RemainingDay}D ${RemainingHour}H ${RemainingMin}M`);
    } else {
      setAdjustedEndDate('0D 0H 0M');
    }
  }, [tokenEndDate]);

  return (
    <>
      <TokenWrapper>
        <TokenImage src={tokenImage} />
        <TokenTitle>
          {tokenName} #{tokenId}
        </TokenTitle>
        <TokenEndDate>
          <BiTimer color="#de7251" size="25px" />
          {'\u00a0'}
          {adjustedEndDate}
        </TokenEndDate>
        <TicketsInfoTitle>
          <span>Tickets Remaining</span>
          <span>Price / Ticket</span>
        </TicketsInfoTitle>
        <TicketInfo>
          <span>
            {Number(tokenTicketSupply) - tokenParticipatedList.length} /{' '}
            {tokenTicketSupply}
          </span>
          <span>{tokenTicketPrice / 10 ** 18} KLAY</span>
        </TicketInfo>
        <ViewRaffleButton
          onClick={() => {
            navigate(`/raffleDetail?tokenId=${tokenId}`, {
              state: {
                tokenInfo: token,
              },
            });
          }}
        >
          View Raffle
        </ViewRaffleButton>
      </TokenWrapper>
    </>
  );
};

export default Raffle;
