import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export const NavBar = ({ handleMouseDown }) => {
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
          <Nav.Link href="/#/login">Login</Nav.Link>
          <Nav.Link href="/#/signup">Signup</Nav.Link>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Nav.Link href="/#/cart" md={{ span: 4, offset: 4 }}>
            Cart
          </Nav.Link>
          <button onMouseDown={handleMouseDown}>
            <a href="/#/cart">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
