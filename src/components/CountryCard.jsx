import { Card, Row, Col } from "react-bootstrap";
import { FaImage } from "react-icons/fa";

export default function CountryCard({ country }) {
  return (
    <Card className="border border-dark border-1 rounded-1">
      <Card.Body className="p-2">
        <Row className="align-items-center g-0">
          <Col
            xs={4}
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "60px" }}
          >
            {country.flag ? (
              <Card.Img
                src={country.flag}
                alt={country.name}
                style={{
                  width: "100%",
                  maxHeight: "50px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <div
                className="bg-light p-2 d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "50px" }}
              >
                <FaImage size={30} className="text-muted" />
              </div>
            )}
          </Col>
          <Col xs={8}>
            <Card.Title className="mb-0 fw-semibold fs-6">
              {country.name}
            </Card.Title>
            <Card.Text className="text-muted mb-0">{country.region}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
