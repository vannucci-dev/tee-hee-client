import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Hero from "../../Components/Hero/Hero";
export default function Login() {
  return (
    <Container style={{ marginTop: "3rem", width: "50%" }}>
      {/*
    <ul>
        if(messages.success_msg){ %>
            <li><%= messages.success_msg %></li>
        <% } %>

      
    </ul>
    <ul>
        <% if(messages.error){ %>
            <li><%= messages.error %></li>
        <% } %>
    <ul>

    */}
      <Hero
        title="Log in your personal fashion space"
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="username-hero-image"
      />
      <Form action="/api/auth/login" method="post">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            id="username"
            type="text"
            name="username"
            required
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
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

      <a href="/api/auth/signup">Don't have an account? Signup here.</a>
    </Container>
  );
}
