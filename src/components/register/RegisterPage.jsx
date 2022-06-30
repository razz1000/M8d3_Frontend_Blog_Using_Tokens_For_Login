import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [firstnameInput, setFirstnameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const registerUrl = "http://localhost:3001/users/register";

  const bodyData = {
    email: emailInput,
    password: passwordInput,
    firstName: firstnameInput,
    lastName: lastnameInput,
  };

  const fetchData = async () => {
    let response = await fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        /* Authorization: `Bearer ${token}`, */
      },
      body: JSON.stringify(bodyData),
    });
    if (response.ok) {
      let data = await response.json();
      console.log(data);
    } else {
      console.log("something went wrong during registration.");
    }
  };

  const onSubmitFunction = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Container className="register-top-container">
      <Row>
        <Col>
          <Form onSubmit={onSubmitFunction}>
            <Form.Group>
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your firstname"
                onChange={(event) => {
                  setFirstnameInput(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your lastname"
                onChange={(event) => {
                  setLastnameInput(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) => {
                  setEmailInput(event.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setPasswordInput(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <a href="http://localhost:3001/users/googleLogin">
            <div className="mt-5">
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
