import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductCard(props) {
  return (
    <Card style={{ maxWidth: "500px" }}>
      <Card.Img variant="top" src={props.image_link} alt={props.description} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.price}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>

        <Button variant="outline-dark">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
