import styled from "styled-components";
import Button from "../Button";

const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  display: grid;
  place-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background: black;
  opacity: 0.95;
`;

const Message = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  background: white;
  padding: 2rem;
  align-content: center;
  align-items: center;
`;

const Flex = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

function Modal({ handleOpen, handleReset }) {
  return (
    <Backdrop>
      <Message>
        <p>Are you sure?</p>
        <p>This will reset the level and progress of your creature.</p>
        <Flex>
          <Button onClick={handleReset}>Yes</Button>
          <Button onClick={handleOpen}>No</Button>
        </Flex>
      </Message>
    </Backdrop>
  );
}

export default Modal;
