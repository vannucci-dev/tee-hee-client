import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import OrderCard from "../../Components/OrderCard/OrderCard";
import "./cart.css";
import { getProduct } from "../../utilities/axios";
import { Link } from "react-router-dom";

export default function Cart({
  menuVisibility,
  handleMouseDown,
  cartItems,
  items,
  handleItems,
}) {
  let visibility = "hide";

  if (menuVisibility) {
    visibility = "show";
  }

  useEffect(() => {
    if (cartItems.length !== items.length) {
      const iterateCartItems = async () => {
        for (const item of cartItems) {
          const response = await getProduct(item.product_id);
          handleItems(response[0]);
        }
      };
      iterateCartItems();
    }
    return () => {
      handleItems("reset");
    };
  }, [cartItems]);

  const renderItems = () => {
    if (cartItems.length === items.length) {
      return items.map((product, index) => {
        total += parseFloat(product.price * cartItems[index].quantity);
        return (
          <OrderCard product={product} index={index} cartItems={cartItems} />
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  };

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
          <button className="cartCloseBtn" onMouseDown={handleMouseDown}>
            X
          </button>
          {renderItems()}

          <hr />
          <h4 className="total">Total:</h4>
          <p className="total">£{total}</p>

          <Link to="/order" onClick={handleMouseDown}>
            <Button className="checkout" variant="outline-dark">
              Proceed to payment
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
