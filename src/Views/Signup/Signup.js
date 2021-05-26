import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Hero from "../../Components/Hero/Hero";

export default function Signup() {
  return (
    <Container>
      <Hero
        title="create a new account"
        src="https://images.unsplash.com/photo-1551727974-8af20a3322f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="signup-hero-image"
      />
      <Form
        action="/api/auth/signup"
        method="post"
        style={{ marginBottom: "2rem" }}
      >
        <Form.Group className="mb-3">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            id="first_name"
            type="text"
            name="first_name"
            required
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            id="last_name"
            type="text"
            name="last_name"
            required
            placeholder="Enter last name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            id="email"
            type="text"
            name="email"
            required
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            id="username"
            type="text"
            name="username"
            required
            placeholder="Enter your username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            id="password"
            type="password"
            name="password"
            required
            placeholder="Enter your password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm your password:</Form.Label>
          <Form.Control
            id="password2"
            type="password"
            name="password2"
            required
            placeholder="Confirm your password"
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Signup
        </Button>
      </Form>

      <a href="/api/auth/login">Already have an account? Login here.</a>
    </Container>
  );
}
