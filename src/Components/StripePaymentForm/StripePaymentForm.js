import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import { addToOrderItems, clearCartItems } from "../../utilities/axios";

import Form from "react-bootstrap/Form";
import "./stripePaymentForm.css";

import axios from "axios";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "black",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "20px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "red",
      color: "red",
    },
  },
};

export default function StripePaymentForm({
  items,
  cartItems,
  order,
  user,
  cart,
  handleCartItems,
}) {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:5000/api/checkout",
          {
            amount: 1000,
            id,
          }
        );
        if (response.data.message === "Payment succesful") {
          console.log("Payment succesful");
          console.log(response);
          setSuccess(true);
        } else {
          console.log("Payment failed");
          setFailed(true);
        }
      } catch (err) {
        console.log("Error!", err);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleOrderItemsCreation = async () => {
    if (success && !failed) {
      for (let [i, item] of items.entries()) {
        await addToOrderItems(
          cartItems[i].quantity,
          item.price,
          item.product_id,
          item.name,
          item.description,
          order[0].order_id
        );
      }
    }
  };

  const handleCartItemsRemoval = async () => {
    await clearCartItems(cart.cart_id);
    handleCartItems([]);
  };

  useEffect(() => {
    if (success) {
      handleOrderItemsCreation();
    }
  }, [success]);

  const renderPayment = () => {
    if (!success) {
      return (
        <>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                id="nameForm"
                type="text"
                name="nameForm"
                readOnly
                placeholder={user.name + " " + user.last_name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                id="emailForm"
                type="text"
                name="emailForm"
                readOnly
                placeholder={user.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                id="addressForm"
                type="text"
                name="addressForm"
                readOnly
                placeholder="12 Dummy St, Manchester, M1XXX"
              />
            </Form.Group>
            <p>The total is:</p>
            <p>£{order[0].total}</p>
          </Form>
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <button className="checkoutBtn">Checkout</button>
          </form>
          {failed ? (
            <div>
              There's been a problem with your payment. Please try again
            </div>
          ) : (
            ""
          )}
        </>
      );
    } else {
      const params = {
        pathname: "/user",
        state: {
          order: order[0],
        },
      };
      if (failed === false) {
        handleCartItemsRemoval();
      }
      console.log("order in form.js", params);
      return (
        <div>
          <h2>
            Payment succesful! Review it in your account{" "}
            <Link to={params}>here.</Link>
          </h2>
        </div>
      );
    }
  };
  return <>{renderPayment()}</>;
}
