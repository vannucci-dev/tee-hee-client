import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";

export default function Footer() {
  return (
    <Container className="footer">
      <Row className="footer-categories">
        <Col>
          <ul style={{ listStyle: "none" }}>
            <li>
              <h5>Shop</h5>
            </li>
            <li>Posters</li>
            <li>T-shirts</li>
            <li>Mugs</li>
            <li>Coming-Soon</li>
          </ul>
        </Col>
        <Col>
          <ul style={{ listStyle: "none" }}>
            <li>
              <h5>Shop</h5>
            </li>
            <li>Posters</li>
            <li>T-shirts</li>
            <li>Mugs</li>
            <li>Coming-Soon</li>
          </ul>
        </Col>
        <Col>
          <ul style={{ listStyle: "none" }}>
            <li>
              <h5>Shop</h5>
            </li>
            <li>Posters</li>
            <li>T-shirts</li>
            <li>Mugs</li>
            <li>Coming-Soon</li>
          </ul>
        </Col>
      </Row>
      <hr />
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col>
          <img
            style={{ margin: "auto 2rem" }}
            src="./default-monochrome-black.svg"
            width="100"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Col>
        <Col>
          User Agreement - Privacy Policy - Tee-Hee uses cookies: Cookie Policy
        </Col>
      </Row>
      <hr />
      <Row></Row>
    </Container>
  );
}
