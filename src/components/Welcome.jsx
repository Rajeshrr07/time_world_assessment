import { Container, Row, Col } from "react-bootstrap";

function WelcomeSection() {
  return (
    <Container className="my-md-4 text-center">
      {/* Mobile View: Top HR */}
      <hr className="border border-dark border-1 opacity-100 d-block d-md-none mb-2" />

      {/* Heading Row for Desktop */}
      <Row className="align-items-center d-none d-md-flex">
        <Col>
          <hr className="border border-dark border-2 opacity-100" />
        </Col>
        <Col xs="auto">
          <h2 className="fw-bold text-dark mb-0">WELCOME</h2>
        </Col>
        <Col>
          <hr className="border border-dark border-2 opacity-100 mt-5" />
        </Col>
      </Row>

      {/* Mobile View: Heading + Bottom HR */}
      <div className="d-block d-md-none">
        <h2 className="fw-bold text-dark">WELCOME</h2>
        <hr className="border border-dark border-1 opacity-100 mt-2" />
      </div>
    </Container>
  );
}

export default WelcomeSection;
