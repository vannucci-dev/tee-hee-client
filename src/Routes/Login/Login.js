import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Hero from "../../Components/Hero/Hero";
import { Link, Redirect, useLocation } from "react-router-dom";

import { getCart, getCartItems, logIn } from "../../utilities/axios";

export default function Login({
  handleCart,
  handleUser,
  authenticated,
  handleCartItems,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alreadyAuthenticated, setAlreadyAuthenticated] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "username") {
      setUsername(e.target.value);
    }
    if (name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let loginResponse = await logIn(username, password);

    handleUser(loginResponse);
    setAlreadyAuthenticated(true);

    let cart = await getCart(parseInt(loginResponse.userID));

    handleCart(cart[0]);

    let cartItems = await getCartItems(cart[0].cart_id);

    handleCartItems(await cartItems);
  };

  let message = null;
  const location = useLocation();
  if (location.state !== undefined) {
    message = location.state.message;
  }

  const authenticateAndRedirect = (isAuthenticated, justAuthenticated) => {
    if (isAuthenticated || justAuthenticated) {
      //Once authenticated or if already authenticated
      return <Redirect to="/" />;
    } else {
      return (
        <Container style={{ marginTop: "3rem" }}>
          <Hero
            title="Log in your personal fashion space"
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="username-hero-image"
          />
          {message ? <div>{message}</div> : ""}
          <Form
            action="/api/auth/login"
            method="post"
            onSubmit={(e) => handleLogin(e)}
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

          <Link href="/signup">Don't have an account? Signup here.</Link>
        </Container>
      );
    }
  };

  return (
    <div>{authenticateAndRedirect(authenticated, alreadyAuthenticated)}</div>
  );
}
