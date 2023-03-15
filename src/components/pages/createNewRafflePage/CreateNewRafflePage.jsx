import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Layout from '@articles/Layout';
import CustomModal from '@articles/CustomModal';
import SelectDatePicker from './SelectDatePicker';
import PageTitle from '@atoms/PageTitle';
import useNFT from '@hooks/useNFT';
import useRaffleLayer1 from '@hooks/useRaffleLayer1';
import ChooseNFT from './ChooseNFT';
import { format } from 'date-fns';
import {
  BiPlusCircle,
  BiCaretUp,
  BiCaretDown,
  BiTimeFive,
} from 'react-icons/bi';
import KlaytnIcon from '@assets/image/Klaytn_Icon.png';
import TicketIcon from '@assets/image/Ticket_Icon.svg';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 20px 0 50px 0;
`;

const Wrapper = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

const ChooseNftButton = styled.button`
  width: 100%;
  height: 430px;
  cursor: pointer;
  background-color: ${colors.bgSecondary};
  border-radius: 10px;
  border: 1px solid ${colors.bgWhite};
  font-size: 100px;

  &:hover {
    background-color: ${colors.bgWhite};
  }
`;

const ChooseNftImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const TextHeader = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
  color: ${colors.textPrimary};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const TextAdd = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.tertiary80};
`;

const TextInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InputIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px 0 0 10px;
  border: 1px solid ${colors.bgWhite};
  background-color: ${colors.bgTertiary};
  margin-bottom: 30px;
  object-fit: fill;
`;

const TextInputBox = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 500;
  padding: 5px;
  color: ${colors.textPrimary};
  background-color: ${colors.bgTertiary};
  border: 1px solid ${colors.bgWhite};

  &:hover {
    border: 1px solid ${colors.primary80};
  }

  &:focus {
    outline: none;
    border: 1px solid ${colors.primary80};
    box-shadow: 0 0 10px ${colors.primary40};
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 10px;
  color: ${colors.textPrimary};
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: ${colors.bgTertiary};
  border: 1px solid ${colors.bgWhite};

  &:hover {
    border: 1px solid ${colors.primary80};
  }
`;

const CreateButton = styled.button`
  width: 200px;
  height: 50px;
  cursor: pointer;
  background-color: ${colors.tertiary80};
  border: 1px solid ${colors.bgWhite};
  border-radius: 10px;
  font-size: 25px;

  &:hover {
    background-color: ${colors.tertiary40};
  }

  &:disabled {
    cursor: default;
    color: ${colors.textBlack};
    border: none;
    background-color: ${colors.bgTertiary};
  }
`;

const UpDownButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const UpButton = styled.button`
  cursor: pointer;
  width: 50px;
  height: 20px;
  font-size: 20px;
  border: 1px solid ${colors.bgWhite};
  color: ${colors.textPrimary};
  background-color: ${colors.bgTertiary};
  border-radius: 0 10px 0 0;

  &:hover {
    background-color: ${colors.bgWhite};
  }
`;

const DownButton = styled.button`
  cursor: pointer;
  width: 50px;
  height: 20px;
  font-size: 20px;
  border: 1px solid ${colors.bgWhite};
  color: ${colors.textPrimary};
  background-color: ${colors.bgTertiary};
  border-radius: 0 0 10px 0;

  &:hover {
    background-color: ${colors.bgWhite};
  }
`;

const ModalTitle = styled.span`
  margin-bottom: 20px;
  font-style: italic;
`;

const ModalContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const CreateNewRafflePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [showMyNFTs, setShowMyNFTs] = useState(false);
  const { myNFTNotInProgress } = useNFT();
  const { setRaffleLayer1 } = useRaffleLayer1();

  const [tokenImage, setTokenImage] = useState('');
  const [tokenId, setTokenId] = useState(0);
  const [endDate, setEndDate] = useState(null);
  const [ticketSupply, setTicketSupply] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);

  console.log(tokenId);
  console.log(typeof tokenId);
  console.log(endDate);
  console.log(typeof endDate);
  console.log(ticketSupply);
  console.log(typeof ticketSupply);
  console.log(ticketPrice);
  console.log(typeof ticketPrice);

  useEffect(() => {
    setCurrentTime(new Date());
  }, []);

  const handleTicketSupplyChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setTicketSupply(Number(newValue));
    } else {
      e.target.value = ticketSupply;
    }
  };

  const handleTicketSupplyClick = (e, type) => {
    if (ticketSupply >= 1) {
      if (type === 'plus') {
        setTicketSupply((prev) => Number(prev) + 1);
      } else if (type === 'minus') {
        setTicketSupply((prev) => Number(prev) - 1);
      }
    } else {
      if (type === 'plus') {
        setTicketSupply((prev) => Number(prev) + 1);
      }
    }
  };

  const handleTicketPriceChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*(\.\d{0,1})?$/.test(newValue)) {
      setTicketPrice(Number(newValue));
    } else {
      e.target.value = ticketSupply;
    }
  };

  const handleTicketPriceClick = (e, type) => {
    let newValue;
    if (ticketPrice >= 0.1) {
      if (type === 'plus') {
        setTicketPrice((prev) => {
          newValue = prev + 0.1;
          return Number(newValue.toFixed(1));
        });
      } else if (type === 'minus') {
        setTicketPrice((prev) => {
          newValue = prev - 0.1;
          return Number(newValue.toFixed(1));
        });
      }
    } else {
      if (type === 'plus') {
        setTicketPrice((prev) => {
          newValue = prev + 0.1;
          return Number(newValue.toFixed(1));
        });
      }
    }
  };

  return (
    <Layout page="create-new-raffle-page">
      <PageTitle>CREATE NEW RAFFLE</PageTitle>
      <Container>
        <Wrapper>
          <TextHeader>Choose NFT</TextHeader>
          <ChooseNftButton onClick={() => setShowMyNFTs(true)}>
            {tokenImage === '' ? (
              <BiPlusCircle />
            ) : (
              <ChooseNftImage src={tokenImage} />
            )}
          </ChooseNftButton>
        </Wrapper>
        <Wrapper>
          <TextHeader>
            Raffle End Date<TextAdd>GMT+09:00</TextAdd>
          </TextHeader>
          <SelectDatePicker onEndDateChange={setEndDate} />
          <TextHeader>Pick Time</TextHeader>
          <TextBox>
            <BiTimeFive />
            {'\u00a0'}
            {format(currentTime, 'MMMM d, yyyy h:mm aa')}
          </TextBox>
          <TextHeader>
            Ticket Supply
            <TextAdd>When you click the button, it changes by 1.</TextAdd>
          </TextHeader>
          <TextInputWrapper>
            <InputIcon src={TicketIcon} />
            <TextInputBox
              onChange={handleTicketSupplyChange}
              value={ticketSupply}
            />
            <UpDownButtonWrapper>
              <UpButton onClick={(e) => handleTicketSupplyClick(e, 'plus')}>
                <BiCaretUp />
              </UpButton>
              <DownButton onClick={(e) => handleTicketSupplyClick(e, 'minus')}>
                <BiCaretDown />
              </DownButton>
            </UpDownButtonWrapper>
          </TextInputWrapper>
          <TextHeader>
            Ticket Price
            <TextAdd>When you click the button, it changes by 0.1.</TextAdd>
          </TextHeader>
          <TextInputWrapper>
            <InputIcon src={KlaytnIcon} />
            <TextInputBox
              onChange={handleTicketPriceChange}
              value={ticketPrice}
            />
            <UpDownButtonWrapper>
              <UpButton onClick={(e) => handleTicketPriceClick(e, 'plus')}>
                <BiCaretUp />
              </UpButton>
              <DownButton onClick={(e) => handleTicketPriceClick(e, 'minus')}>
                <BiCaretDown />
              </DownButton>
            </UpDownButtonWrapper>
          </TextInputWrapper>
        </Wrapper>
      </Container>
      <CreateButton
        onClick={() => {
          setRaffleLayer1(tokenId, endDate, ticketSupply, ticketPrice);
        }}
        disabled={!tokenId || !endDate || !ticketSupply || !ticketPrice}
      >
        Create Raffle
      </CreateButton>

      <CustomModal show={showMyNFTs} toggleModal={() => setShowMyNFTs(false)}>
        <ModalTitle>Choose NFT</ModalTitle>
        <ModalContent>
          {myNFTNotInProgress.map((token) => (
            <ChooseNFT
              key={token.tokenId}
              token={token}
              onTokenIdChange={setTokenId}
              onTokenImageChange={setTokenImage}
              onSelectionComplete={setShowMyNFTs}
            />
          ))}
        </ModalContent>
      </CustomModal>
    </Layout>
  );
};

export default CreateNewRafflePage;
