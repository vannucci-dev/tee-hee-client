import { Container } from "react-bootstrap";
import "./orderCard.css";

export default function OrderCard({ product, cartItems, index }) {
  return (
    <Container fluid className="container">
      <hr />
      <div className="cart-items">
        <div className="cart-item">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img alt={product.name} src={product.image_link} />
            <h5>{product.name}</h5>
            <p className="cardDescription">{product.description}</p>
          </div>
        </div>
        <div className="cart-DX">
          <div className="cart-item">
            <h5>Quantity</h5>
            <p>{cartItems[index].quantity}</p>
          </div>
          <div className="cart-item">
            <h5>Price</h5>
            <p>£{product.price}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
