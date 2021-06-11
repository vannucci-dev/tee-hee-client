import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import "./cart.css";
import axios from "axios";

export default function Cart({ menuVisibility, handleMouseDown, cart }) {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  let visibility = "hide";

  if (menuVisibility) {
    visibility = "show";
  }

  const getItemsInfo = (id) => {
    if (!isNaN(id)) {
      axios({
        url: `/api/products/${id}`,
        method: "GET",
      })
        .then((res) => {
          setItems((items) => [...items, res.data[0]]);
        })
        .catch((err) => {
          console.log("error while fetching item info: ");
          console.log(err);
        });
    } else {
      console.log("ID is NAN in getItemsInfo");
    }
  };

  useEffect(() => {
    let id = parseInt(cart.cart_id);
    if (!isNaN(id)) {
      axios({
        url: `/api/cart-items/${id}`,
        method: "GET",
      })
        .then((res) => {
          console.log("The items in the cart are:");
          console.log(res.data);
          res.data.forEach((item) => {
            setCartItems((cartItems) => [...cartItems, item]);
            getItemsInfo(item.product_id);
          });
        })
        .catch((err) => {
          console.log("error while fetching item IDs: ");
          console.log(err);
        });
    }
  }, [cart]);

  let total = 0;

  return (
    <div id="flyoutMenu" className={visibility}>
      {cartItems.length < 1 ? (
        <div>
          <button onMouseDown={handleMouseDown}>X</button>
          <div>Your cart is empty. Add some items now.</div>
        </div>
      ) : (
        <div>
          <h3 style={{ marginTop: "3rem" }}>Your shopping cart: </h3>
          <button onMouseDown={handleMouseDown}>X</button>
          {items.map((product, index) => {
            total += parseFloat(product.price * cartItems[index].quantity);
            return (
              <Container fluid className="container">
                <hr />
                <div className="cart-items">
                  <div className="cart-item">
                    <h5>{product.name}</h5>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img alt={product.name} src={product.image_link} />
                      <p>{product.description}</p>
                    </div>
                  </div>
                  <div className="cart-item">
                    <h5>Quantity</h5>
                    <p>{cartItems[index].quantity}</p>
                  </div>
                  <div className="cart-item">
                    <h5>Price</h5>
                    <p>£{product.price}</p>
                  </div>
                </div>
              </Container>
            );
          })}

          <hr />
          <h4 className="total">Total:</h4>
          <p className="total">£{total}</p>

          <Button className="checkout" variant="outline-dark">
            Proceed to payment
          </Button>
        </div>
      )}
    </div>
  );
}
