import styled from "styled-components";
import { Card } from "./components/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import data from "./data.json";
import { addInfo } from "./fetures/days/days-slice";
const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 500px) {
    top: 20%;
    left: 30%;
    transform: translate(-30%, -20%);
  }
`;
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    data.map((day) => {
      return dispatch(addInfo({ ...day, isActive: false }));
    });
  }, [dispatch]);
  return (
    <Container>
      <Card></Card>
    </Container>
  );
}

export default App;
