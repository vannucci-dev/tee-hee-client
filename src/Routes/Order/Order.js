import { Redirect, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Hero from "../../Components/Hero/Hero";
import OrderCard from "../../Components/OrderCard/OrderCard";
import "./order.css";
import { addToOrder, getOrder } from "../../utilities/axios";

export default function Order({
  user,
  authenticated,
  cartItems,
  items,
  handleOrder,
}) {
  let total = 0;

  const handleOrderCreation = async () => {
    console.log(user);
    const added = await addToOrder(user.userID, total, "pending");
    const response = await getOrder(added.user_id);
    handleOrder(response[0]);
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
                total += Number(
                  (product.price * cartItems[index].quantity).toFixed(2)
                );
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
          <Link to="/checkout">
            <button role="link" onMouseDown={handleOrderCreation}>
              Proceed to payment
            </button>
          </Link>
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}
