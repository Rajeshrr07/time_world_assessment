import { useState, useEffect } from "react";
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
import LoginIllustration from "../assets/login.png"; // Image path

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const navigate = useNavigate();

  // Add placeholder and focus styling
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      input::placeholder,
      .form-control::placeholder {
        font-size: 16px;
        color: #3E3E3E;
        font-weight : 600;
      }

      input::-webkit-input-placeholder {
       font-size: 16px;
        color: #3E3E3E;
        font-weight : 600;
      }

      input::-moz-placeholder {
       font-size: 16px;
        color: #3E3E3E;
        font-weight : 600;
      }

      input:-ms-input-placeholder {
       font-size: 16px;
        color: #3E3E3E;
        font-weight : 600;
      }

      input::-ms-input-placeholder {
       font-size: 16px;
        color: #3E3E3E;
        font-weight : 600;
      }

      input:focus {
        box-shadow: none !important;
        outline: none !important;
        border-color: #000 !important;
      }

      input[type="checkbox"] {
        width: 32px;
        height: 32px;
        border: 2px solid black;
        background #F2F2F2;
        cursor:pointer;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100">
        {/* Left Side – Login Form */}
        <Col
          md={6}
          className="px-5 d-flex align-items-center justify-content-center"
        >
          <div style={{ width: "100%", maxWidth: "380px" }}>
            <h2 className="fw-bold mb-2">Sign In</h2>
            <div className="mt-3 mb-4">
              <small className="text-muted fw-bolder text-dark fs-9">
                New user?{" "}
                <a href="#" className="text-primary underline-hover">
                  Create an account
                </a>
              </small>
            </div>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Control
                  className="border-2 border-dark rounded-0 p-2"
                  type="email"
                  placeholder="Username or email"
                  value={email}
                  required
                  style={{ width: "280px", height: "48px" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Control
                  className="border-2 border-dark rounded-0 p-2"
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  style={{ width: "280px", height: "48px" }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Check
                  type="checkbox"
                  id="keepSignedIn"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                  className="me-2 rounded-0"
                />
                <Form.Label
                  htmlFor="keepSignedIn"
                  className="mb-0 dark-text fw-bold"
                  style={{fontSize: "16px",
                    color: "#3E3E3E",
                    fontWeight : "600",}}
                >
                  Keep me signed in
                </Form.Label>
              </Form.Group>

              <Button
                type="submit"
                variant="dark"
                className="mb-3 rounded-0"
                style={{ width: "280px", height: "48px" }}
              >
                Sign In
              </Button>

              <div
                className="d-flex align-items-center my-3"
                style={{ width: "280px" }}
              >
                <div
                  className="flex-grow-1"
                  style={{ height: "1px", backgroundColor: "#ccc" }}
                ></div>
                <div
                  className="px-2 dark-text fw-bold"
                  style={{ fontSize: "0.9rem" }}
                >
                  Or Sign In With
                </div>
                <div
                  className="flex-grow-1"
                  style={{ height: "1px", backgroundColor: "#ccc" }}
                ></div>
              </div>

              <div
                className="d-flex justify-content-center gap-3"
                style={{ width: "280px" }}
              >
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
          className="d-none d-md-flex justify-content-start align-items-center"
        >
          <Image
            src={LoginIllustration}
            alt="Login Illustration"
            fluid
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
