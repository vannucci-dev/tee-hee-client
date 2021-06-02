import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function SmallCard(props) {
  return (
    <Card style={{ maxWidth: "200px", overflow: "hidden" }}>
      <Card.Img
        style={{
          maxHeight: "200px",
          minHeight: "200px",
          maxWidth: "200px",
          minWidth: "200px",
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

        <Link to={`/products/${props.product_id}`}>
          <Button variant="outline-dark">More info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
