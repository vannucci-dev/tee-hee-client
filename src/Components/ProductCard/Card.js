import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductCard() {
  return (
    <Card style={{ maxWidth: "500px" }}>
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
  );
}
