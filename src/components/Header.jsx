import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Header({ continents, selected, onSelect }) {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = (cont) => {
    onSelect(cont);
    setExpanded(false); // Collapse the navbar after selection
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className="py-3"
        bg="white"
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Container fluid>
          <Navbar.Brand className="fw-bold fs-5">Countries</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {continents.map((cont) => (
                <Nav.Link
                  key={cont}
                  onClick={() => handleSelect(cont)}
                  className={`me-3 ${
                    selected === cont
                      ? "border-bottom border-dark border-2"
                      : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  {cont}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
