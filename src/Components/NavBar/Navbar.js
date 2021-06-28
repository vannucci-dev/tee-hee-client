import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NavBar({
  isLoggedOut,
  authenticated,
  user,
  cart,
  handleMouseDown,
}) {
  const logOut = (e) => {
    e.preventDefault();

    axios({
      url: "/api/auth/logout",
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200) {
          isLoggedOut(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isAuthenticated = (auth) => {
    if (auth) {
      return (
        <div>
          Hello <Link to="/user">{user.name}</Link>!{" "}
          <Link onClick={logOut}>Logout</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      );
    }
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#faf1e6" }}>
      <img
        style={{ margin: "auto 2rem" }}
        src="./default-monochrome-black.svg"
        width="100"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <Link to="/shirts">T-shirts</Link>
            <NavDropdown.Divider />
            <Link to="/posters">Posters</Link>
            <NavDropdown.Divider />
            <Link to="/mugs">Mugs</Link>
          </NavDropdown>
        </Nav>
        <Nav>
          {isAuthenticated(authenticated)}
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <button onMouseDown={handleMouseDown}>
            <i class="fas fa-shopping-cart"></i>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
