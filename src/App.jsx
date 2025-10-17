import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Player from "./components/Player";

function App() {
  return (
    <Container fluid className="px-0">
      <Row className="g-0">
        {/* Sidebar */}
        <Col xs={2}>
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col xs={12} md={10} className="offset-md-2">
          <MainContent />
        </Col>
      </Row>
      {/* Player  */}
      <Player />
    </Container>
  );
}

export default App;
