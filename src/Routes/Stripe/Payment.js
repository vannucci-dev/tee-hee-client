import { Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Hero from "../../Components/Hero/Hero";
import StripeContainer from "../../Components/StripeContainer/StripeContainer";

export default function Payment({
  user,
  authenticated,
  cartItems,
  items,
  order,
  cart,
  handleCartItems,
}) {
  const renderPayment = () => {
    if (authenticated) {
      return (
        <Container style={{ marginTop: "3rem" }}>
          <Hero
            title={`${user.name}, proceed to payment.`}
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
            alt="order-hero-image"
          />
          <StripeContainer
            items={items}
            cartItems={cartItems}
            order={order}
            user={user}
            cart={cart}
            handleCartItems={handleCartItems}
          />
        </Container>
      );
    } else {
      return <Redirect to="/login" />;
    }
  };

  return <div>{order.length > 0 ? renderPayment() : <Redirect to="/" />}</div>;
}
