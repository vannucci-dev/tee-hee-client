import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import ProductCard from "../ProductCard/Card";

export default function Featured({
  authenticated,
  cart,
  handleCartItems,
  handleItems,
}) {
  const [shirts, setShirts] = useState([]);
  const [mugs, setMugs] = useState([]);
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const shirtsRequest = async () => {
      try {
        const res = await axios.get(`/api/products/shirt`);
        const { data } = res;
        setShirts(data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    shirtsRequest();
  }, []);

  useEffect(() => {
    const mugsRequest = async () => {
      try {
        const res = await axios.get(`/api/products/mug`);
        const { data } = res;
        setMugs(data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    mugsRequest();
  }, []);

  useEffect(() => {
    const postersRequest = async () => {
      try {
        const res = await axios.get(`/api/products/poster`);
        const { data } = res;
        setPosters(data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    postersRequest();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4 style={{ margin: "2rem" }}>Today's Featured:</h4>
          </Col>
        </Row>
        <Row>
          <Container style={{ display: "flex", justifyContent: "center" }}>
            {shirts.slice(0, 1).map((shirt) => {
              return (
                <ProductCard
                  product={shirt}
                  authenticated={authenticated}
                  cart={cart}
                  handleCartItems={handleCartItems}
                  handleItems={handleItems}
                />
              );
            })}

            {posters.slice(0, 1).map((poster) => {
              return (
                <ProductCard
                  product={poster}
                  authenticated={authenticated}
                  cart={cart}
                  handleCartItems={handleCartItems}
                  handleItems={handleItems}
                />
              );
            })}

            {mugs.slice(0, 1).map((mug) => {
              return (
                <ProductCard
                  product={mug}
                  authenticated={authenticated}
                  cart={cart}
                  handleCartItems={handleCartItems}
                  handleItems={handleItems}
                />
              );
            })}
          </Container>
        </Row>
      </Container>
    </div>
  );
}
