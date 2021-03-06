import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "../StripePaymentForm/StripePaymentForm";

export default function StripeContainer({
  items,
  cartItems,
  order,
  user,
  cart,
  handleCartItems,
}) {
  const API_KEY =
    "pk_test_51J57pNFaOOFIfsf5daadfgXT2Ew1W7A8qC71h5bqMXOPIqiR5eVSnkRtaTEwuf3XsO72NTdSY56X7J5vkZ20PZSz005SP8DwKi";
  const stripePromise = loadStripe(API_KEY);
  console.log("order in container.js", order);
  return (
    <Elements stripe={stripePromise}>
      <StripePaymentForm
        items={items}
        cartItems={cartItems}
        order={order}
        user={user}
        cart={cart}
        handleCartItems={handleCartItems}
      />
    </Elements>
  );
}
