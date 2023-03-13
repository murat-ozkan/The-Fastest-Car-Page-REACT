import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Container>
      <Header />
      <CardContainer />
    </Container>
  );
}

export default App;
