import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCarousel from "../../Components/Carousel/Carousel";
import "./product.css";
import Hero from "../../Components/Hero/Hero";

export default function Product() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Hero
              title="Browse our shirts"
              src="https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="shirts-hero-image"
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <h4>Browse by category:</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductCarousel />
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "3rem" }}>
        <Row>
          <Col>
            <h4>Browse by name:</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductCarousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
