import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export const NavBar = () => {
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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">T-shirts</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Posters</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Mugs</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">About us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#link">Login</Nav.Link>
          <Nav.Link href="#link">Signup</Nav.Link>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Nav.Link href="#link" md={{ span: 4, offset: 4 }}>
            Cart
          </Nav.Link>
          <Nav.Link href="#link">
            <i class="fas fa-shopping-cart"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
