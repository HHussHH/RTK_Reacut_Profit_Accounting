import styled from "styled-components";
import { Card } from "./components/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import data from "./data.json";
import { addInfo } from "./fetures/days/days-slice";
const Container = styled.div`
  width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
