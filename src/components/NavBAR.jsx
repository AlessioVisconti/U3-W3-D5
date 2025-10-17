import { Row, Col } from "react-bootstrap";

const NavBAR = () => {
  return (
    <Row className="g-0 mb-4">
      <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </Col>
    </Row>
  );
};

export default NavBAR;
