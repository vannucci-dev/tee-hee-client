import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCarousel from "../../Components/Carousel/Carousel";
import "./product.css";
import Hero from "../../Components/Hero/Hero";
import AllProducts from "../../Components/AllProducts/AllProducts";

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

      <Container
        style={{
          marginTop: "3rem",
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Row>
          <Col>
            <h4>All {props.title}s:</h4>
          </Col>
        </Row>
        <Row>
          <AllProducts category={props.title} />
        </Row>
      </Container>
    </div>
  );
}
