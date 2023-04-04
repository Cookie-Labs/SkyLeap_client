import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import LoadingSpinner from '@atoms/LoadingSpinner';
import useNFT from '@hooks/useNFT';
import { BiImage, BiPlusCircle } from 'react-icons/bi';
import SelectDatePicker from '@pages/rafflixPages/pages/createNewRafflePage/SelectDatePicker';
import ChooseNFT from '@pages/rafflixPages/pages/createNewRafflePage/ChooseNFT';
import { format } from 'date-fns';
import CustomModal from '@articles/CustomModal';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const PageTitle = styled.span`
  width: 100%;
  color: ${colors.textSecondary};
  font-size: 3rem;
  font-weight: 700;
  padding: 10px 0;
  text-align: center;
`;

const ContentWrapper = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid ${colors.bgWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.bgQuaternary};
`;

const LabelBox = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  padding: 20px;
  color: ${colors.textPrimary};
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: ${colors.bgTertiary};
  border: 2px dashed ${colors.bgWhite};
  border-radius: 12px;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    background-color: ${colors.bgWhite};
  }
`;

const ImgBox = styled.img`
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 12px;
`;

const InputBox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

const TextBox = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: ${colors.textPrimary};
  font-weight: 700;
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

const OnlyTextBox = styled.div`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: ${colors.textPrimary};
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: ${colors.bgTertiary};
  border: 1px solid ${colors.bgWhite};

  &:hover {
    border: 1px solid ${colors.tertiary80};
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
`;

const CreateButton = styled.button`
  width: 200px;
  height: 50px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${colors.bgTertiary};
  border: 1px solid ${colors.bgWhite};
  border-radius: 10px;
  font-size: 25px;

  &:hover {
    background-color: ${colors.bgWhite};
  }

  &:disabled {
    cursor: default;
    color: ${colors.textBlack};
    border: none;
  }
`;

const ChooseNftButton = styled.button`
  width: 300px;
  height: 300px;
  cursor: pointer;
  background-color: ${colors.bgTertiary};
  border-radius: 10px;
  border: 2px dashed ${colors.bgWhite};
  font-size: 100px;
  margin-bottom: 30px;

  &:hover {
    background-color: ${colors.bgWhite};
  }
`;

const ChooseNftImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
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

const SetLayer2 = ({ transactionFunc }) => {
  const { createTokenURI, mintNFT, myNFTNotInProgress } = useNFT();

  const [imageFile, setImageFile] = useState(null);
  const [nftImage, setNftImage] = useState(null);
  const [nftName, setNftName] = useState('');
  const [nftDesc, setNftDesc] = useState('');
  const [nftExternalLink, setNftExternalLink] = useState('');

  const [currentTime, setCurrentTime] = useState(new Date());
  const [showMyNFTs, setShowMyNFTs] = useState(false);
  const [tokenImage, setTokenImage] = useState('');
  const [tokenId, setTokenId] = useState(0);
  const [endDate, setEndDate] = useState(null);
  const [ticketSupply, setTicketSupply] = useState(null);
  const [ticketPrice, setTicketPrice] = useState(null);

  const [isMint, setIsMint] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isRaffle, setIsRaffle] = useState(false);
  const [isRaffleLoading, setIsRaffleLoading] = useState(false);

  useEffect(() => {
    setCurrentTime(new Date());
  }, []);

  const createNFT = async () => {
    setIsMint(false);
    setIsLoading(true);
    try {
      const tokenURI = await createTokenURI(
        nftImage,
        nftName,
        nftDesc,
        nftExternalLink,
      );
      await mintNFT(tokenURI);
    } catch (err) {
      console.log(err);
    }
    setIsMint(true);
    setIsLoading(false);
  };

  const createRaffle = async () => {
    setIsRaffle(false);
    setIsRaffleLoading(true);
    try {
      await transactionFunc(tokenId, endDate, ticketSupply, ticketPrice);
    } catch (err) {
      console.log(err);
    }
    setIsRaffle(true);
    setIsRaffleLoading(false);
  };

  const handleTicketSupplyChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setTicketSupply(Number(newValue));
    } else {
      e.target.value = ticketSupply;
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

  return (
    <Container>
      <ContentWrapper>
        <PageTitle>CREATE NFT</PageTitle>
        <LabelBox for="fileInput">
          {imageFile ? (
            <ImgBox for="fileInput" src={imageFile} alt="preview image" />
          ) : (
            <BiImage size="100" />
          )}
        </LabelBox>
        <InputBox
          id="fileInput"
          type="file"
          name="file"
          onChange={(e) => {
            setNftImage(e.target.files[0]);
            setImageFile(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <TextBox
          placeholder="* NAME"
          onChange={(e) => {
            setNftName(e.target.value);
          }}
        />
        <TextBox
          placeholder="DESCRIPTION"
          onChange={(e) => {
            setNftDesc(e.target.value);
          }}
        />
        <TextBox
          placeholder="EXTERNAL LINK"
          onChange={(e) => {
            setNftExternalLink(e.target.value);
          }}
        />
        <BottomWrapper>
          {isLoading ? (
            <LoadingSpinner />
          ) : isMint ? (
            <span>Successfully created!</span>
          ) : (
            <CreateButton onClick={createNFT} disabled={!nftImage || !nftName}>
              Create NFT
            </CreateButton>
          )}
        </BottomWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <PageTitle>CREATE RAFFLE</PageTitle>
        <ChooseNftButton onClick={() => setShowMyNFTs(true)}>
          {tokenImage === '' ? (
            <BiPlusCircle />
          ) : (
            <ChooseNftImage src={tokenImage} />
          )}
        </ChooseNftButton>
        <SelectDatePicker onEndDateChange={setEndDate} />
        <OnlyTextBox>{format(currentTime, 'MMMM d, yyyy h:mm aa')}</OnlyTextBox>
        <TextBox
          placeholder="* Ticket Supply"
          onChange={handleTicketSupplyChange}
          value={ticketSupply}
        />
        <TextBox
          placeholder="* Ticket Price"
          onChange={handleTicketPriceChange}
          value={ticketPrice}
        />
        <BottomWrapper>
          {isRaffleLoading ? (
            <LoadingSpinner />
          ) : isRaffle ? (
            <span>Successfully created!</span>
          ) : (
            <CreateButton
              onClick={createRaffle}
              disabled={!tokenId || !endDate || !ticketSupply || !ticketPrice}
            >
              Create Raffle
            </CreateButton>
          )}
        </BottomWrapper>
      </ContentWrapper>

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
    </Container>
  );
};

export default SetLayer2;
