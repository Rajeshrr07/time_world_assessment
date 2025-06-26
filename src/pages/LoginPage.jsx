import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Image,
} from "react-bootstrap";
import { BsGoogle, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import LoginIllustration from "../assets/login.png"; // This is your provided full image

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (pwd) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(pwd);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters, with 1 uppercase, 1 number, and 1 symbol."
      );
      return;
    }
    setError("");
    navigate("/home");
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="w-100">
        {/* Left Side – Login Form */}
        <Col
          md={6}
          className="px-5 d-flex align-items-center justify-content-center"
        >
          <div style={{ width: "100%", maxWidth: "380px" }}>
            <h3 className="fw-bold mb-2">Sign In</h3>
            <div className="mb-4">
              <small className="text-muted">
                New user?{" "}
                <a href="/register" className="text-primary">
                  Create an account
                </a>
              </small>
            </div>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Username or email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Check
                  type="checkbox"
                  id="keepSignedIn"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                  className="me-2"
                />
                <Form.Label htmlFor="keepSignedIn" className="mb-0">
                  Keep me signed in
                </Form.Label>
              </Form.Group>

              <Button type="submit" variant="dark" className="w-100 mb-3">
                Sign In
              </Button>

              <div className="d-flex align-items-center my-3">
                <div
                  className="flex-grow-1"
                  style={{ height: "1px", backgroundColor: "#ccc" }}
                ></div>
                <div className="px-2 text-muted" style={{ fontSize: "0.9rem" }}>
                  Or Sign In With
                </div>
                <div
                  className="flex-grow-1"
                  style={{ height: "1px", backgroundColor: "#ccc" }}
                ></div>
              </div>

              <div className="d-flex justify-content-center gap-3">
                {[BsGoogle, BsFacebook, BsLinkedin, BsTwitter].map(
                  (Icon, idx) => (
                    <Button
                      key={idx}
                      variant="outline-dark"
                      size="sm"
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <Icon />
                    </Button>
                  )
                )}
              </div>
            </Form>
          </div>
        </Col>

        {/* Right Side – Illustration */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            src={LoginIllustration}
            alt="Login Illustration"
            fluid
            style={{ objectFit: "contain" }}
          />
        </Col>
      </Row>
    </Container>
  );
}
