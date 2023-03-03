import styled from "styled-components";
import { Card } from "./components/Card";

const Container = styled.div`
  width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  return (
    <Container>
      <Card></Card>
    </Container>
  );
}

export default App;
