import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Hero from "../../Components/Hero/Hero";
import { Link, Redirect, useLocation } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();
  let message = null;
  if (location.state !== undefined) {
    message = location.state.message;
  }
  useEffect(() => {
    axios
      .get("/api/auth/login")
      .then((res) => {
        setAuthenticated(res.data.authenticated);
      })
      .catch((error) => {
        setAuthenticated(false);
      });
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "username") {
      setUsername(e.target.value);
    }
    if (name === "password") {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postRequest();
  };
  const postRequest = async () => {
    try {
      const data = { username, password };
      const res = await axios.post(`/api/auth/login`, { data });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container style={{ marginTop: "3rem", width: "50%" }}>
      {/*
    <ul>
        {messages.success_msg ? <li>{messages.success_msg}</li> : ""}
    </ul>
    <ul>
        {messages.error ? <li>{messages.error}</li> : ""}
    </ul>
      */}
      {message ? <div>{message}</div> : ""}
      <Hero
        title="Log in your personal fashion space"
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="username-hero-image"
      />
      {authenticated === "authenticated" ? (
        <Redirect to="/login" push={true} /> && <div>Welcome</div>
      ) : (
        <Form
          action="/api/auth/login"
          method="post"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onChange={(e) => handleChange(e)}
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              id="username"
              type="text"
              name="username"
              required
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            onChange={(e) => handleChange(e)}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="outline-dark" type="submit">
            Login
          </Button>
        </Form>
      )}
      <Link href="/signup">Don't have an account? Signup here.</Link>
    </Container>
  );
}
