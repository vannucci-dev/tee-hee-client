import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar({
  isLoggedOut,
  authenticated,
  user,
  handleMouseDown,
  items,
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
        <div className="userAuthenticated">
          <Link id="userName" to="/user">
            {user.name}
          </Link>
          ! <Link onClick={logOut}>Logout</Link>
        </div>
      );
    } else {
      return (
        <div className="userAuthenticated">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      );
    }
  };

  return (
    <Navbar
      className="navbar"
      expand="lg"
      style={{ backgroundColor: "#faf1e6" }}
    >
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
          <Link to="/" className="home-button">
            Home
          </Link>
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
          <div className="cartIcon" onMouseDown={handleMouseDown}>
            <i
              style={{ margin: "5px 0 0 5px" }}
              class="fas fa-lg fa-shopping-cart"
            ></i>
            <p>({items.length})</p>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
