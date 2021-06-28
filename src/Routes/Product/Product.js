import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCarousel from "../../Components/Carousel/Carousel";
import "./product.css";
import Hero from "../../Components/Hero/Hero";
import AllProducts from "../../Components/AllProducts/AllProducts";

export default function Product({
  authenticated,
  cart,
  handleCartItems,
  handleItems,
  title,
  src,
}) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Hero
              title={`Browse our ${title}s`}
              src={src}
              alt={`${title}-hero-image`}
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
            <ProductCarousel
              category={title}
              authenticated={authenticated}
              cart={cart}
              handleCartItems={handleCartItems}
              handleItems={handleItems}
            />
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
            <h4>All {title}s:</h4>
          </Col>
        </Row>
        <Row>
          <AllProducts category={title} />
        </Row>
      </Container>
    </div>
  );
}
