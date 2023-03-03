import styled from "styled-components";
import { Card } from "./components/Card";

const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
`;
function App() {
  return (
    <Container>
      <Card></Card>
    </Container>
  );
}

export default App;
