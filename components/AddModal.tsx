import { createPortal } from "react-dom";
import { styled } from "styled-components";

const Modal = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  position: absolute;
  padding: 5px;
  left: 35px;
  background-color: white;
`;

const Input = styled.input`
  border 2px solid black
`;

const Button = styled.button``;

export default function AddModal({ containerRef }) {
  return createPortal(
    <Modal>
      <Input type="text" />
      <Button>Add</Button>
    </Modal>,
    containerRef
  );
}
