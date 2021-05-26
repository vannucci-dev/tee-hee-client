import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Featured() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4 style={{ margin: "2rem" }}>Today's Featured:</h4>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={12}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1543427100-3d7ff5e642b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
              <Card.Body>
                <Card.Title>Hope</Card.Title>
                <Card.Subtitle>$ 15.99</Card.Subtitle>
                <Card.Text>Vaporwave 80's neon t-shirt</Card.Text>

                <Button variant="outline-dark">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1509536011809-cb92bafafd75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
              <Card.Body>
                <Card.Title>The adventure begins!</Card.Title>
                <Card.Subtitle>$ 15.99</Card.Subtitle>
                <Card.Text>
                  Craving for some camping? Bring this vintage mug with you (it
                  can be used on the camp stove too!)
                </Card.Text>

                <Button variant="outline-dark">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1604161546853-1a097fbc30fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=681&q=80"
              />
              <Card.Body>
                <Card.Title>DO SOMETHING!</Card.Title>
                <Card.Subtitle>$ 15.99</Card.Subtitle>
                <Card.Text>
                  Fake vintage poster inspired by the American propaganda of the
                  60's.
                </Card.Text>

                <Button variant="outline-dark">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
