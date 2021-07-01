import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../ProductCard/Card";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProductCarousel({
  category,
  authenticated,
  cart,
  handleCartItems,
  handleItems,
}) {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    const productsRequest = async () => {
      try {
        const res = await axios.get(`/api/products/${category}`);
        const { data } = res;
        setProductsState(data);
      } catch (err) {
        console.error(err);
      }
    };
    productsRequest();
  }, [category]);

  return (
    <Carousel controls={false} indicators={false} interval={4000}>
      <Carousel.Item>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          {productsState.slice(0, 3).map((product) => {
            return (
              <ProductCard
                product={product}
                authenticated={authenticated}
                cart={cart}
                handleCartItems={handleCartItems}
                handleItems={handleItems}
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
                product={product}
                authenticated={authenticated}
                cart={cart}
                handleCartItems={handleCartItems}
                handleItems={handleItems}
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
                product={product}
                authenticated={authenticated}
                cart={cart}
                handleCartItems={handleCartItems}
                handleItems={handleItems}
              />
            );
          })}
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}
