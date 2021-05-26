import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../ProductCard/Card";
import Container from "react-bootstrap/Container";

export default function ProductCarousel() {
  return (
    <Carousel interval={4000}>
      <Carousel.Item>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}
