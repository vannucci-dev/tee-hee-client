import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../ProductCard/Card";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import axios from "axios";

export default function ProductCarousel(props) {
  const [productsState, setProductsState] = useState([]);
  axios.get(`/api/products/${props.category}`).then((res) => {
    const products = res.data;
    setProductsState(products);
  });
  return (
    <Carousel controls={false} interval={4000}>
      <Carousel.Item>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          {productsState.slice(0, 3).map((product) => {
            return (
              <ProductCard
                name={product.name}
                price={product.price}
                image_link={product.image_link}
                description={product.description}
              />
            );
          })}
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          {productsState.slice(3, 6).map((product) => {
            return (
              <ProductCard
                name={product.name}
                price={product.price}
                image_link={product.image_link}
                description={product.description}
              />
            );
          })}
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          {productsState.slice(6, 9).map((product) => {
            return (
              <ProductCard
                name={product.name}
                price={product.price}
                image_link={product.image_link}
                description={product.description}
              />
            );
          })}
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}
