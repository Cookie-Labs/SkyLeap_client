import styled from 'styled-components';
import * as colors from '@styles/colors';
import { BiX } from 'react-icons/bi';

const ModalContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: auto;
  font-size: 30px;
  font-weight: 700;
  background-color: ${colors.bgTertiary};
  border-radius: 8px;
  padding: 20px 20px 50px 20px;
  margin: 0 auto;
  border: none;
  outline: none;
  overflow: none;
  position: absolute;
  left: 50%;
  top: 50%;
  gap: 10px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 5px 6px 6px rgba(0, 0, 0, 0.15);
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${colors.bgSecondary};
  border: 1px solid ${colors.bgWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  top: 0px;
  left: 115px;

  &:hover {
    background-color: ${colors.bgWhite}
  }
`;

const CustomModal = ({ show, toggleModal, styles, children }) => {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <ModalContainer
      show={show}
      onMouseDown={handleClickOutside}
      style={{ ...styles }}
    >
      <ModalContent>
        <CloseButton onClick={toggleModal}>
          <BiX size="30" />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default CustomModal;
