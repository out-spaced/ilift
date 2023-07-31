import { RefObject } from "react";
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

type Props = {
  containerRef: RefObject<HTMLDivElement>;
};

export default function AddModal({ containerRef }: Props) {
  if (!containerRef.current) throw new Error("No ref assigned for modal");
  return createPortal(
    <Modal>
      <Input type="text" />
      <Button>Add</Button>
    </Modal>,
    containerRef.current
  );
}
