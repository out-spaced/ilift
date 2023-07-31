import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;

export default function WeightInput() {
  return (
    <>
      <Container>
        <div>current weight</div>
        <input type="number" />
      </Container>
    </>
  );
}
