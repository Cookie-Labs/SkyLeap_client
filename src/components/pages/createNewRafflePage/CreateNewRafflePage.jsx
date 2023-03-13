import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Layout from '@articles/Layout';
import SelectDatePicker from './SelectDatePicker';
import PageTitle from '@atoms/PageTitle';
import { format } from 'date-fns';
import { BiPlusCircle } from 'react-icons/bi';

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

const TextHeader = styled.span`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
  color: ${colors.textPrimary};
`;

const TextInputBox = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  border-radius: 10px;
  color: ${colors.textPrimary};
  font-size: 20px;
  font-weight: 500;
  padding: 5px;
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
  background-color: ${colors.bgSecondary};
  border-radius: 10px;
  border: 1px solid ${colors.bgWhite};
  font-size: 25px;

  &:hover {
    background-color: ${colors.bgWhite};
  }

  &:disabled {
    cursor: default;
    background-color: ${colors.bgRed};
  }
`;

const CreateNewRafflePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [endDate, setEndDate] = useState(null);
  const [ticketSupply, setTicketSupply] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);

  console.log(endDate);

  useEffect(() => {
    setCurrentTime(new Date());
  }, []);


  return (
    <Layout page="create-new-raffle-page">
      <PageTitle>CREATE NEW RAFFLE</PageTitle>
      <Container>
        <Wrapper>
          <TextHeader>Choose NFT</TextHeader>
          <ChooseNftButton>
            <BiPlusCircle />
          </ChooseNftButton>
        </Wrapper>
        <Wrapper>
          <TextHeader>Raffle End Date</TextHeader>
          <SelectDatePicker onEndDateChange={setEndDate}/>
          <TextHeader>Pick Time</TextHeader>
          <TextBox>{format(currentTime, 'MMMM d, yyyy h:mm aa')}</TextBox>
          <TextHeader>Ticket Supply</TextHeader>
          <TextInputBox
            onChange={(e) => {
              setTicketSupply(e.target.value);
            }}
            value={ticketSupply}
          />
          <TextHeader>Ticket Price</TextHeader>
          <TextInputBox
            onChange={(e) => {
              setTicketPrice(e.target.value);
            }}
            value={ticketPrice}
          />
        </Wrapper>
      </Container>
      <CreateButton>Create Raffle</CreateButton>
    </Layout>
  );
};

export default CreateNewRafflePage;
