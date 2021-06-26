import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import { addToOrderItems } from "../../utilities/axios";

import axios from "axios";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "black",
      color: "black",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "40px",
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

export default function StripePaymentForm({ items, cartItems, order }) {
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

  useEffect(() => {
    if (success) {
      handleOrderItemsCreation();
    }
  }, [success]);

  const renderPayment = () => {
    if (!success) {
      return (
        <>
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <button>Pay</button>
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
      return (
        <div>
          <h2>
            Payment succesful! Review it in your account{" "}
            <Link to="/user">here.</Link>
          </h2>
        </div>
      );
    }
  };
  return <>{renderPayment()}</>;
}
