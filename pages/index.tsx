import { styled } from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 800px;
`;
const Lift = styled.div``;
const Stat = styled.div``;
const Timer = styled.div``;
const Info = styled.div``;
const Input = styled.div``;

export default function App() {
  let currentSet = 2;
  let previousCompleted = 225;
  let failedReps = 1;
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
    }
  };
  return (
    <Container>
      <button>add</button>
      <Lift>
        <Info>
          <span>squat</span>
          <Stat>current set: {currentSet}</Stat>
          <Stat>previous: {previousCompleted}</Stat>
          <button>see history</button>
        </Info>
        <Input>
          <div>current weight</div>
          <input type="text" />
          <button onClick={startTimer}>start timer</button>
          <Timer>1:00</Timer>
          <div>reps failed</div>
          <input type="text" />
          <button onClick={completedSet}>completed set</button>
        </Input>
      </Lift>
      <Lift>
        bench
        <select>
          <option>200</option>
        </select>
      </Lift>
    </Container>
  );
}
