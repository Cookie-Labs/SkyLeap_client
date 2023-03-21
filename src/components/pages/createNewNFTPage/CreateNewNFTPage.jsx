import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Layout from '@articles/Layout';
import useNFT from '@hooks/useNFT';
import { BiImage } from 'react-icons/bi';
import LoadingSpinner from '@atoms/LoadingSpinner';
import PageTitle from '@atoms/PageTitle';

const ContentContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const BoxTitle = styled.span`
  color: ${colors.textPrimary};
  font-size: 30px;
  font-weight: 700;
  padding: 5px 0;
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
  border: 1px solid ${colors.bgWhite};
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
  margin-bottom: 30px;
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

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
`;

const MintButton = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 10px;
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

const CreateNewNFTPage = () => {
  const { createTokenURI, mintNFT } = useNFT();
  const [imageFile, setImageFile] = useState(null);
  const [nftImage, setNftImage] = useState(null);
  const [nftName, setNftName] = useState('');
  const [nftDesc, setNftDesc] = useState('');

  const [isMint, setIsMint] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createNFT = async () => {
    setIsMint(false);
    setIsLoading(true);
    try {
      const tokenURI = await createTokenURI(nftImage, nftName, nftDesc);
      await mintNFT(tokenURI);
    } catch (err) {
      console.log(err);
    }
    setIsMint(true);
    setIsLoading(false);
  };

  return (
    <Layout page="create-new-nft-page">
      <PageTitle>CREATE NEW NFT</PageTitle>
      <ContentContainer>
        <BoxTitle>* IMAGE</BoxTitle>
        <LabelBox for="fileInput">
          {imageFile ? (
            <ImgBox for="fileInput" src={imageFile} alt="preview image" />
          ) : (
            <BiImage size="50" />
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
        <BoxTitle>* NAME</BoxTitle>
        <TextBox
          onChange={(e) => {
            setNftName(e.target.value);
          }}
        />
        <BoxTitle>DESCRIPTION</BoxTitle>
        <TextBox
          onChange={(e) => {
            setNftDesc(e.target.value);
          }}
        />
        <BottomWrapper>
          {isLoading ? (
            <LoadingSpinner />
          ) : isMint ? (
            <span>Successfully created!</span>
          ) : (
            <MintButton onClick={createNFT} disabled={!nftImage || !nftName}>
              Create NFT
            </MintButton>
          )}
        </BottomWrapper>
      </ContentContainer>
    </Layout>
  );
};

export default CreateNewNFTPage;
