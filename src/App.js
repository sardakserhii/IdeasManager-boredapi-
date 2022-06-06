import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Achivments from "./components/Achivments/Achivments";
import ComplitedChallanges from "./components/ComplitedChallanges/ComplitedChallanges";
import FreshIdeaList from "./components/FreshIdea/FreshIdeaList";
import MyIdeaList from "./components/MyIdea/MyIdeaList";

function App() {
  return (
    <Container>
      <Row>
        <FreshIdeaList />
      </Row>
      <Row>
        <MyIdeaList />
      </Row>
      <Row>
        <Achivments />
      </Row>
      <Row>
        <ComplitedChallanges />
      </Row>
    </Container>
  );
}

export default App;
