import Button from "react-bootstrap/Button";
import OrderCard from "../../Components/OrderCard/OrderCard";
import React, { useEffect, useState } from "react";
import "./cart.css";
import { getProduct } from "../../utilities/axios";

export default function Cart({
  handleItems,
  menuVisibility,
  handleMouseDown,
  cartItems,
}) {
  const [items, setItems] = useState([]);

  let visibility = "hide";

  if (menuVisibility) {
    visibility = "show";
  }

  useEffect(() => {
    cartItems.map(async (item) => {
      const product = await getProduct(item.product_id);

      setItems((items) => [...items, product[0]]);
    });
    return () => {
      setItems([]);
    };
  }, [cartItems]);

  let total = 0;
  handleItems(items);
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
              <OrderCard
                product={product}
                index={index}
                cartItems={cartItems}
              />
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
