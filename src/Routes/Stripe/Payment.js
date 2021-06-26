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
}) {
  return (
    <div>
      {authenticated ? (
        <Container style={{ marginTop: "3rem", width: "50%" }}>
          <Hero
            title={`${user.name}, PAY!`}
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
            alt="order-hero-image"
          />
          <StripeContainer items={items} cartItems={cartItems} order={order} />
        </Container>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}
