import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import axios from "axios";

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
          Hello <a href="/#/user">{user.name}</a>!{" "}
          <Nav.Link onClick={logOut}>Logout</Nav.Link>
        </div>
      );
    } else {
      return (
        <div>
          <Nav.Link href="/#/login">Login</Nav.Link>
          <Nav.Link href="/#/signup">Signup</Nav.Link>
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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="/#/shirts">T-shirts</NavDropdown.Item>
            <NavDropdown.Item href="/#/posters">Posters</NavDropdown.Item>
            <NavDropdown.Item href="/#/mugs">Mugs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">About us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {isAuthenticated(authenticated)}
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Nav.Link href="/#/cart" md={{ span: 4, offset: 4 }}>
            Cart
          </Nav.Link>
          <button onMouseDown={handleMouseDown}>
            <i class="fas fa-shopping-cart"></i>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
