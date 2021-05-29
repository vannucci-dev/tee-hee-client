import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import ProductCard from "../ProductCard/Card";

export default function Featured() {
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
                  name={shirt.name}
                  price={shirt.price}
                  description={shirt.description}
                  image_link={shirt.image_link}
                />
              );
            })}

            {posters.slice(0, 1).map((poster) => {
              return (
                <ProductCard
                  name={poster.name}
                  price={poster.price}
                  description={poster.description}
                  image_link={poster.image_link}
                />
              );
            })}

            {mugs.slice(0, 1).map((mug) => {
              return (
                <ProductCard
                  name={mug.name}
                  price={mug.price}
                  description={mug.description}
                  image_link={mug.image_link}
                />
              );
            })}
          </Container>
        </Row>
      </Container>
    </div>
  );
}
