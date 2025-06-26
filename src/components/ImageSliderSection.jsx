import { Container, Row, Col, Card } from "react-bootstrap";
import ImageSlider from "./ImageSlider";
import { Image as ImageIcon } from "react-bootstrap-icons";

export default function ImageSliderSection() {
  return (
    <Container className="mb-4">
      <Row className="gx-3 px-0">
        {/* Right column - Static frame icon */}
        <Col xs={12} md={4} className="order-1 order-md-2 mb-3 mb-md-0">
          <Card className="h-100">
            <Card.Body
              className="d-flex align-items-center justify-content-center bg-light"
              style={{
                height: "150px", // height on mobile
                minHeight: "100%", // ensures fill in desktop if parent's height allows
              }}
            >
              <ImageIcon size={60} className="text-muted" />
            </Card.Body>
          </Card>
        </Col>

        {/* Left column - ImageSlider */}
        <Col xs={12} md={8} className="order-2 order-md-1">
          <Card className="h-100">
            <Card.Body className="p-0 bg-light" style={{ height: "300px" }}>
              <ImageSlider />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
