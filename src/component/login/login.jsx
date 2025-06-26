// Login.js
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (pass) => {
    const minLength = pass.length >= 8;
    const hasCapital = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    return minLength && hasCapital && hasNumber && hasSymbol;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError('Password must be 8+ chars with 1 capital, 1 number & 1 symbol');
      return;
    }
    // If validation passes, redirect to home
    navigate('/home');
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;