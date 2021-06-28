import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Featured from "../../Components/Featured/Featured";

import "./home.css";
import { Link } from "react-router-dom";

export default function Home({
  authenticated,
  cart,
  handleCartItems,
  handleItems,
}) {
  return (
    <div>
      <hr />
      <Container className="hero"></Container>
      <Container className="categories">
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col md={4} sm={12} className="category-container category-shirt">
            <Link to="/shirts">
              <Button className="button" variant="light">
                Shop Shirts
              </Button>
            </Link>
          </Col>
          <Col md={4} sm={12} className="category-container category-posters">
            <Link to="/posters">
              <Button className="button" variant="light">
                Shop Posters
              </Button>
            </Link>
          </Col>
          <Col md={4} sm={12} className="category-container category-mugs">
            <Link to="/mugs">
              <Button className="button" variant="light">
                Shop Mugs
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Featured
        authenticated={authenticated}
        cart={cart}
        handleCartItems={handleCartItems}
        handleItems={handleItems}
      />
    </div>
  );
}
