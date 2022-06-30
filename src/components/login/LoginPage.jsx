import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [emailFromInput, setEmailFromInput] = useState("");
  const [passwordFromInput, setPasswordFromInput] = useState("");

  const loginUrl = "http://localhost:3001/users/login";

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const bodyData = {
    email: emailFromInput,
    password: passwordFromInput,
  };
  const token = window.localStorage.getItem("token");

  let loginFetch = async () => {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyData),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let accessToken = data.accessToken;
      console.log("ACCESSTOKEN:", accessToken);
      localStorage.setItem("token", JSON.stringify(accessToken));
      routeChange("/");
    } else {
      console.log("Something went wrong in the login process.");
    }
  };

  const onSubmitFunction = (event) => {
    event.preventDefault();
    loginFetch();
  };

  return (
    <Container className="new-login-container">
      <Row>
        <Col>
          <h1 className="h1-login-header">LOGIN</h1>
          <Form onSubmit={onSubmitFunction}>
            <Form.Group controlId="formBasicEmail" className="mt=5">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) => {
                  setEmailFromInput(event.target.value);
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
                  setPasswordFromInput(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
