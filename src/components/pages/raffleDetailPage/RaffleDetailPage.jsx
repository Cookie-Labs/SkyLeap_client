import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Layout from '@articles/Layout';
import ConnectWallet from '@articles/ConnectWallet';
import { format } from 'date-fns';
import { formatAddress } from '@utils/parser';
import useRaffleLayer1 from '@hooks/useRaffleLayer1';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';
import LoadingSpinner from '@atoms/LoadingSpinner';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  margin: 50px 0;
`;

const LeftWrapper = styled.div`
  width: 450px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightWrapper = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.bgWhite};
  border-radius: 20px;
  background-color: ${colors.bgSecondary};
  padding: 20px;
`;

const TokenImage = styled.img`
  width: 100%;
  height: 450px;
  border-radius: 20px;
  border: 1px solid ${colors.bgWhite};
  object-fit: fill;
  margin-bottom: 20px;
`;

const OwnerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  gap: 10px;
  margin-bottom: 10px;
`;

const OwnerTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.primary80};
`;

const OwnerAddress = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.textPrimary};
`;

const TokenTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 40px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 20px 0 10px 0;
`;

const WalletButtonWrapper = styled.div`
  width: 70%;
  height: 90px;
  font-size: 30px;
`;

const TokenWinnerWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 7px solid ${colors.primary80};
  font-weight: bold;
`;

const TokenWinnerTitle = styled.span`
  color: ${colors.primary80};
  font-size: 20px;
  margin-bottom: 10px;
`;

const TokenWinnerAddress = styled.span`
  color: ${colors.textPrimary};
  font-size: 30px;
`;

const TicketSelectWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TicketInputBox = styled.input`
  width: 50%;
  height: 50px;
  font-size: 40px;
  font-weight: 700;
  padding: 5px;
  text-align: center;
  color: ${colors.textPrimary};
  background-color: ${colors.bgSecondary};
  border: 1px solid ${colors.bgWhite};
  border-radius: 10px;

  &:hover {
    border: 1px solid ${colors.primary80};
  }

  &:focus {
    outline: none;
    border: 1px solid ${colors.primary80};
    box-shadow: 0 0 10px ${colors.primary40};
  }
`;

const TicketUpDownButton = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 40px;
  font-weight: 700;
  border: 1px solid ${colors.bgWhite};
  color: ${colors.primary80};
  background-color: ${colors.primary20};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.primary40};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 10px 0;
`;

const TabButton = styled.button`
  width: 30%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 10px;
  font-size: 20px;
  color: ${({ isActive }) =>
    isActive ? colors.textPrimary : colors.textBlack};
  background-color: ${({ isActive }) =>
    isActive ? colors.primary80 : colors.primary20};

  &:hover {
    background-color: ${colors.primary40};
    transition: 0.3s;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  min-height: 460px;
  border-top: 1px solid ${colors.bgWhite};
  border-bottom: 1px solid ${colors.bgWhite};
`;

const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: auto;
`;

const ContentTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.primary40};
  margin: 10px 0;
`;

const ContentInner = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.textPrimary};
  margin-bottom: 20px;
`;

const JoinRaffleButton = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.bgWhite};
  border-radius: 15px;
  background-color: ${colors.primary80};
  color: ${colors.textPrimary};
  font-size: 30px;
  font-weight: 900;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    cursor: default;
    background-color: ${colors.bgTertiary};
    color: ${colors.textBlack};
    border: none;
  }
`;

const RaffleDetailPage = () => {
  const noWinner = '0x0000000000000000000000000000000000000000';
  const location = useLocation();
  const { tokenInfo } = location.state;
  const { account } = useRecoilValue(userState);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const { joinRaffleLayer1 } = useRaffleLayer1();

  const [tab, setTab] = useState('Details');
  const [isJoin, setIsJoin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [adjustedEndMilisec, setAdjustedEndMilisec] = useState(
    tokenInfo.tokenEndDate * 1000 - Date.now(),
  );
  const [adjustedEndDate, setAdjustedEndDate] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setAdjustedEndMilisec(tokenInfo.tokenEndDate * 1000 - Date.now());
    }, 1000);

    if (adjustedEndMilisec > 0) {
      const RemainingSec = Math.floor((adjustedEndMilisec / 1000) % 60);
      const RemainingMin = Math.floor((adjustedEndMilisec / (1000 * 60)) % 60);
      const RemainingHour = Math.floor(
        (adjustedEndMilisec / (1000 * 60 * 60)) % 24,
      );
      const RemainingDay = Math.floor(
        adjustedEndMilisec / (1000 * 60 * 60 * 24),
      );
      setAdjustedEndDate(
        `${RemainingDay}D ${RemainingHour}H ${RemainingMin}M ${RemainingSec}S`,
      );
    } else {
      setAdjustedEndDate('ENDED');
    }

    return () => clearInterval(timer);
  }, [tokenInfo.tokenEndDate, adjustedEndMilisec]);



  const participatedList = useMemo(() => {
    let participatedAddress = {};

    for (let i = 0; i < tokenInfo.tokenParticipatedList.length; i++) {
      const address = tokenInfo.tokenParticipatedList[i];
      if (participatedAddress[address]) {
        participatedAddress[address]++;
      } else {
        participatedAddress[address] = 1;
      }
    }

    return participatedAddress;
  }, [tokenInfo.tokenParticipatedList])
  const participatedListEntries = Object.entries(participatedList);



  const handleBuyTickets = async () => {
    setIsJoin(false);
    setIsLoading(true);
    try {
      await joinRaffleLayer1(
        tokenInfo.tokenId,
        numberOfTickets,
        tokenInfo.tokenTicketPrice,
      );
    } catch (err) {
      console.log(err);
    }
    setIsJoin(true);
    setIsLoading(false);
  };



  const handleTicketNumberChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setNumberOfTickets(Number(newValue));
    } else {
      e.target.value = numberOfTickets;
    }
  };



  const handleTicketNumClick = (e, type) => {
    if (numberOfTickets > 1) {
      if (type === 'plus') {
        setNumberOfTickets((prev) => Number(prev) + 1);
      } else if (type === 'minus') {
        setNumberOfTickets((prev) => Number(prev) - 1);
      }
    } else {
      if (type === 'plus') {
        setNumberOfTickets((prev) => Number(prev) + 1);
      }
    }
  };



  
  return (
    <Layout page="raffle-detail-page">
      <Container>
        <LeftWrapper>
          <TokenImage src={tokenInfo.tokenImage} />
          {tokenInfo.tokenWinner !== noWinner ? (
            <TokenWinnerWrapper>
              <TokenWinnerTitle>👑RAFFLE WINNER!</TokenWinnerTitle>
              <TokenWinnerAddress>
                {formatAddress(tokenInfo.tokenWinner)}
              </TokenWinnerAddress>
            </TokenWinnerWrapper>
          ) : account ? (
            <>
              <TicketSelectWrapper>
                <TicketUpDownButton
                  onClick={(e) => handleTicketNumClick(e, 'minus')}
                >
                  <BiMinusCircle />
                </TicketUpDownButton>
                <TicketInputBox
                  onChange={handleTicketNumberChange}
                  value={numberOfTickets}
                />
                <TicketUpDownButton
                  onClick={(e) => handleTicketNumClick(e, 'plus')}
                >
                  <BiPlusCircle />
                </TicketUpDownButton>
              </TicketSelectWrapper>
              {isLoading ? (
                <LoadingSpinner />
              ) : isJoin ? (
                <span>Successfully joined!</span>
              ) : (
                <JoinRaffleButton
                  onClick={handleBuyTickets}
                  disabled={!numberOfTickets}
                >
                  Buy For{' '}
                  {String(
                    (numberOfTickets * tokenInfo.tokenTicketPrice) / 10 ** 18,
                  )}
                  KLAY
                </JoinRaffleButton>
              )}
            </>
          ) : (
            <WalletButtonWrapper>
              <ConnectWallet />
            </WalletButtonWrapper>
          )}
        </LeftWrapper>
        <RightWrapper>
          <TokenTitle>
            {tokenInfo.tokenName} #{tokenInfo.tokenId}
          </TokenTitle>
          <OwnerWrapper>
            <OwnerTitle>Owner</OwnerTitle>
            <OwnerAddress>{formatAddress(tokenInfo.tokenOwner)}</OwnerAddress>
          </OwnerWrapper>
          <ButtonsWrapper>
            <TabButton
              isActive={tab === 'Details'}
              value="Details"
              onClick={(newTab) => {
                setTab(newTab.target.value);
              }}
            >
              Details
            </TabButton>
            <TabButton
              isActive={tab === 'Participants'}
              value="Participants"
              onClick={(newTab) => {
                setTab(newTab.target.value);
              }}
            >
              Participants
            </TabButton>
            <TabButton
              isActive={tab === 'Winner'}
              value="Winner"
              onClick={(newTab) => {
                setTab(newTab.target.value);
              }}
            >
              Winner
            </TabButton>
          </ButtonsWrapper>
          <ContentContainer>
            {tab === 'Details' ? (
              <DetailsWrapper>
                <div>
                  <ContentTitle>Raffle Ends In</ContentTitle>
                  <ContentInner>{adjustedEndDate}</ContentInner>
                </div>
                <div>
                  <ContentTitle>Ticket Price</ContentTitle>
                  <ContentInner>
                    {String(tokenInfo.tokenTicketPrice / 10 ** 18)} KLAY
                  </ContentInner>
                </div>
                <div>
                  <ContentTitle>Raffle End Date</ContentTitle>
                  <ContentInner>
                    {format(
                      tokenInfo.tokenEndDate * 1000,
                      'MMMM d, yyyy h:mm aa',
                    )}
                  </ContentInner>
                </div>
                <div>
                  <ContentTitle>Tickets Remaining</ContentTitle>
                  <ContentInner>
                    {Number(
                      tokenInfo.tokenTicketSupply -
                        tokenInfo.tokenParticipatedList.length,
                    )}{' '}
                    / {tokenInfo.tokenTicketSupply}
                  </ContentInner>
                </div>
              </DetailsWrapper>
            ) : tab === 'Participants' ? (
              <DetailsWrapper>
                <ContentTitle>Wallet Addresses</ContentTitle>
                <ContentTitle>Tickets Bought</ContentTitle>
                {participatedListEntries.map(([address, ticket]) => (
                  <>
                    <ContentInner>{formatAddress(address)}</ContentInner>
                    <ContentInner>{ticket}</ContentInner>
                  </>
                ))}
              </DetailsWrapper>
            ) : tab === 'Winner' ? (
              <DetailsWrapper>
                {tokenInfo.tokenWinner !== noWinner ? (
                  <ContentTitle>
                    {formatAddress(tokenInfo.tokenWinner)}
                  </ContentTitle>
                ) : (
                  <ContentTitle>Raffle not drawn yet</ContentTitle>
                )}
              </DetailsWrapper>
            ) : null}
          </ContentContainer>
        </RightWrapper>
      </Container>
    </Layout>
  );
};

export default RaffleDetailPage;
