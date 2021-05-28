import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCarousel from "../../Components/Carousel/Carousel";
import "./product.css";
import Hero from "../../Components/Hero/Hero";

export default function Product(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Hero
              title={`Browse our ${props.title}s`}
              src={props.src}
              alt={`${props.title}-hero-image`}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <h4>Latest: </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductCarousel category={props.title} />
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
