import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductCard(props) {
  return (
    <Card style={{ maxWidth: "500px", overflow: "hidden" }}>
      <Card.Img
        style={{
          maxHeight: "500px",
          minHeight: "500px",
          maxWidth: "300px",
          minWidth: "300px",
          objectFit: "cover",
        }}
        variant="top"
        src={props.image_link}
        alt={props.description}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>£{props.price}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>

        <Button variant="outline-dark">Add to Cart</Button>
        <label for="quantity">Quantity:</label>
        <input type="number" min="1" max="10" name="quantity" id="quantity" />
      </Card.Body>
    </Card>
  );
}
