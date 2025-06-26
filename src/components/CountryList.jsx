import { Container, Row, Col, Button } from "react-bootstrap";
import CountryCard from "./CountryCard";

export default function CountriesList({ countries }) {
  return (
    <Container>
      <Row>
        {countries.map((country, index) => (
          <Col key={index} xs={12} md={6}>
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>
      <div className="text-center my-4">
        <Button variant="dark">Load more</Button>
      </div>
    </Container>
  );
}
