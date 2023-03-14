import React from "react";
import styled from "styled-components";

const Modalframe = ({ handleModal, children, ...rest }) => {
  return (
    <Container>
      <Background onClick={handleModal} />
      <ModalBlock {...rest}>
        <Close onClick={handleModal}>X</Close>
        <Contents>1234</Contents>
      </ModalBlock>
    </Container>
  );
};
export default Modalframe;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    form {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const ModalBlock = styled.div`
  position: absolute;
  top: 6.5rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: black;
  width: 60rem;

  @media (max-width: 1120px) {
    width: 50rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  }
  min-height: 35rem;
  animation: madal-show 1s;
  @keyframes madal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;
const Close = styled.div`
  color: white;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
