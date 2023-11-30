import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './loginform.scss'; 
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  setIsLoggedIn: (isLoggedIn : boolean) => void;
} 

// Create a functional component for the login page
const LoginForm = ({setIsLoggedIn} : LoginFormProps) => {
  const navigate = useNavigate();

  // Define state for the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your authentication logic here
    setIsLoggedIn(true);
    navigate('/welcomepage');
  };

  return (
    <div className="Auth-form-container">
      <Form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;