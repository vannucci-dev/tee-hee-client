import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React from "react";
import "./cart.css";

export default function Cart(props) {
  let visibility = "hide";

  if (props.menuVisibility) {
    visibility = "show";
  }

  return (
    <div
      id="flyoutMenu"
      onMouseDown={props.handleMouseDown}
      className={visibility}
    >
      <h3 style={{ marginTop: "3rem" }}>Your shopping cart: </h3>
      <Container fluid className="container">
        <hr />
        <div className="cart-items">
          <div className="cart-item">
            <h5>Item</h5>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
              <p>T-shirt bla bla</p>
            </div>
          </div>
          <div className="cart-item">
            <h5>Quantity</h5>
            <p>- | 0 | +</p>
          </div>
          <div className="cart-item">
            <h5>Price</h5>
            <p>$ 16.99</p>
          </div>
        </div>
      </Container>
      <Container fluid className="container">
        <hr />
        <div className="cart-items">
          <div className="cart-item">
            <h5>Item</h5>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />
              <p>T-shirt bla bla</p>
            </div>
          </div>
          <div className="cart-item">
            <h5>Quantity</h5>
            <p>- | 0 | +</p>
          </div>
          <div className="cart-item">
            <h5>Price</h5>
            <p>$ 16.99</p>
          </div>
        </div>
      </Container>
      <hr />
      <h4 className="total">Total:</h4>
      <p className="total"> $ 16.99</p>

      <Button className="checkout" variant="outline-dark">
        Proceed to payment
      </Button>
    </div>
  );
}
