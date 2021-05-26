import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Featured from "../featured/Featured";
import "./home.css";

export default function Home() {
  return (
    <div>
      <hr />
      <Container className="hero"></Container>
      <Container className="categories">
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col md={4} sm={12} className="category-container category-shirt">
            <Button className="button" variant="light">
              Shop Shirts
            </Button>
          </Col>
          <Col md={4} sm={12} className="category-container category-posters">
            <Button className="button" variant="light">
              Shop Posters
            </Button>
          </Col>
          <Col md={4} sm={12} className="category-container category-mugs">
            <Button className="button" variant="light">
              Shop Mugs
            </Button>
          </Col>
        </Row>
      </Container>
      <Featured />
    </div>
  );
}
