import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./smallCard.css";

export default function SmallCard(props) {
  return (
    <Card className="card">
      <Card.Img
        className="cardImg"
        variant="top"
        src={props.image_link}
        alt={props.description}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>£{props.price}</Card.Subtitle>
        <Card.Text className="cardText">{props.description}</Card.Text>

        <Link id="moreButton" to={`/products/${props.product_id}`}>
          <Button variant="outline-dark">More info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
