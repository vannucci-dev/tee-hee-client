import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./hero.css";

export default function Hero(props) {
  return (
    <Container className="hero-container">
      <Image fluid className="hero-image" src={props.src} alt={props.alt} />
      <h2 className="hero-title">{props.title}</h2>
    </Container>
  );
}
