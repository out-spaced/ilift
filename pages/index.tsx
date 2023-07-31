import { useState, useRef } from "react";
import { styled } from "styled-components";
import AddModal from "../components/AddModal";
import WeightInput from "../components/WeightInput";
import RepsFailedInput from "../components/RepsFailedInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 800px;
`;
const Lift = styled.div``;
const Stat = styled.div``;
const Timer = styled.div``;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddButton = styled.button`
  //position: relative;
`;
const AddButtonContainer = styled.div`
  position: relative;
  border: 1px solid red;
`;

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const addButtonRef = useRef(null);

  let currentSet = 2;
  let previousCompleted = 225;
  let failedReps = 1;
  let timeElapsed = "1:00";

  const failRep = () => {
    // do something
  };
  const startTimer = () => {
    // do something
  };
  const completedExcercise = () => {
    // do something
  };
  const completedSet = () => {
    // do something
    if (currentSet === 5) {
      completedExcercise();
    } else {
      startTimer();
    }
  };

  return (
    <Container>
      <AddButtonContainer ref={addButtonRef}>
        <AddButton onClick={() => setModalOpen((prev) => !prev)}>add</AddButton>
        {modalOpen && <AddModal containerRef={addButtonRef.current} />}
      </AddButtonContainer>
      <Lift>
        <Info>
          <span>squat</span>
          <Stat>current set: {currentSet}</Stat>
          <Stat>previous: {previousCompleted}</Stat>
          <div>
            <button>see history</button>
          </div>
        </Info>
        <Input>
          <WeightInput />
          <Timer>{timeElapsed}</Timer>
          <RepsFailedInput />
          <div>
            <button onClick={completedSet}>completed set</button>
          </div>
        </Input>
      </Lift>
    </Container>
  );
}
