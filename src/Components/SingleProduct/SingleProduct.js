import axios from "axios";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import "./singleProduct.css";
import capitalize from "../../utilities/utility";

export default function SingleProduct() {
  const [productSingle, setProductSingle] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const productsRequest = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        const { data } = res;
        setProductSingle(data);
      } catch (err) {
        console.error(err);
      }
    };
    productsRequest();
  }, [id]);

  return (
    <Container>
      {productSingle.slice(0, 1).map((product) => {
        return (
          <Row>
            <Col className="img-col">
              <img className="single-img" src={product.image_link} />
            </Col>
            <Col className="text-col">
              <h4>{capitalize(product.name)}</h4>
              <p className="category-tag">{capitalize(product.category)}</p>
              <h3>£{product.price}</h3>
              <p>{capitalize(product.description)}</p>
              <Button variant="outline-dark">Add to Cart</Button>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
