import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import axios from "axios";

export default function Featured(props) {
  const [productsState, setProductsState] = useState([]);
  axios.get(`/api/products`).then((res) => {
    const products = res.data;
    setProductsState(products);
  });
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4 style={{ margin: "2rem" }}>Today's Featured:</h4>
          </Col>
        </Row>
        <Row>
          {productsState.slice(0, 3).map((product) => {
            return (
              <Col md={4} sm={12}>
                <Card>
                  <Card.Img variant="top" src={product.image_link} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Subtitle>{product.price}</Card.Subtitle>
                    <Card.Text>{product.description}</Card.Text>

                    <Button variant="outline-dark">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
