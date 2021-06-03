import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Hero from "../../Components/Hero/Hero";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirectTo, setRedirectTo] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "first_name":
        setFirstName(value);
        break;
      case "last_name":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "password2":
        setConfirmPassword(value);
        break;
      default:
        return "";
    }
  };

  const signUp = (e) => {
    e.preventDefault();

    axios({
      url: "/api/auth/signup",
      method: "POST",
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password2: confirmPassword,
        username,
      },
    })
      .then((res) => {
        console.log(res);
        const isAuthenticated = res.data.isAuthenticated;
        window.localStorage.setItem("isAuthenticated", isAuthenticated);
        if (res.status === 200) {
          setSuccess(true);
          setError(false);
          setRedirectTo("/login");
        }
      })
      .catch(({ response }) => {
        setError(false);
        setError(response.data.errors);
        setSuccess(false);
      });
  };

  return (
    <div>
      {redirectTo ? (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { message: "Thank you for signing up, now please login." },
          }}
        />
      ) : (
        <Container>
          <Hero
            title="create a new account"
            src="https://images.unsplash.com/photo-1551727974-8af20a3322f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="signup-hero-image"
          />
          {error ? (
            <ul>
              {error.map((message) => (
                <li>{message.message}</li>
              ))}
            </ul>
          ) : (
            ""
          )}
          <Form
            action="/api/auth/signup"
            method="post"
            style={{ marginBottom: "2rem" }}
            onSubmit={signUp}
          >
            <Form.Group className="mb-3" onChange={handleChange}>
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                id="first_name"
                type="text"
                name="first_name"
                required
                placeholder="Enter first name"
              />
            </Form.Group>
            <Form.Group className="mb-3" onChange={handleChange}>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                id="last_name"
                type="text"
                name="last_name"
                required
                placeholder="Enter last name"
              />
            </Form.Group>
            <Form.Group className="mb-3" onChange={handleChange}>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3" onChange={handleChange}>
              <Form.Label>Username:</Form.Label>
              <Form.Control
                id="username"
                type="text"
                name="username"
                required
                placeholder="Enter your username"
              />
            </Form.Group>
            <Form.Group className="mb-3" onChange={handleChange}>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                id="password"
                type="password"
                name="password"
                required
                placeholder="Enter your password"
              />
            </Form.Group>
            <Form.Group className="mb-3" onChange={handleChange}>
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

          <Link to="/login">Already have an account? Login here.</Link>
        </Container>
      )}
    </div>
  );
}
