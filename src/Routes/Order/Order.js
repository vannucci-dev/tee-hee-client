import { Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "../../Components/Hero/Hero";
import OrderCard from "../../Components/OrderCard/OrderCard";
import "./order.css";
import { addToOrder } from "../../utilities/axios";

export default function Order({ user, authenticated, cartItems, items }) {
  let total = 0;

  const handleOrderCreation = () => {
    console.log(user);
    addToOrder(user.userID, total, "pending");
  };

  return (
    <div>
      {authenticated ? (
        <Container style={{ marginTop: "3rem", width: "50%" }}>
          <Hero
            title={`${user.name}, you're one step away from your new style`}
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
            alt="order-hero-image"
          />
          <Row>
            <Col style={{ marginBottom: "2rem" }}>
              <h4>Review your order:</h4>
            </Col>
            <Col>
              {items.map((product, index) => {
                total += parseFloat(product.price * cartItems[index].quantity);
                return (
                  <OrderCard
                    product={product}
                    index={index}
                    cartItems={cartItems}
                  />
                );
              })}
            </Col>
          </Row>
          <div>Total:</div>
          <div>{total}</div>
          <button onMouseDown={handleOrderCreation}>Proceed to payment</button>
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}
