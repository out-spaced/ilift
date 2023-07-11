import { styled } from "styled-components";

const Container = styled.div`
    width: 400px;
    height: 800px;
`;
const Lift = styled.div`
`;
const Stat = styled.div``;

export default function App() {
    return (
        <Container>
            <button>add</button>
            <Lift>
                <Stat>squat</Stat>
                <Stat>current:</Stat>
                <Stat>sets left:</Stat>
                <Stat>previous:</Stat>
                <Stat>reps missed:</Stat>
                <Stat>history</Stat>
            </Lift>
            <Lift>
                bench
                <select>
                    <option>
                        200
                    </option>
                </select>
            </Lift>
        </Container>
    )
}