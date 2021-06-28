import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { addToCartItems, getCartItems } from "../../utilities/axios";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  cart,
  handleCartItems,
  handleItems,
  authenticated,
}) {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState("");

  const handleAdditionToCartItems = async (newQuantity) => {
    console.log("New quantity", newQuantity);
    let cartID = await addToCartItems(cart, product.product_id, newQuantity);
    console.log("CartID", cartID);
    let newCartItems = await getCartItems(cartID);
    console.log("NewCartItems", newCartItems);
    handleCartItems(newCartItems);
    handleItems(product);
    setAdded(true);
  };

  return (
    <Card style={{ maxWidth: "500px", overflow: "hidden" }}>
      <Card.Img
        style={{
          maxHeight: "500px",
          minHeight: "500px",
          maxWidth: "300px",
          minWidth: "300px",
          objectFit: "cover",
        }}
        variant="top"
        src={product.image_link}
        alt={product.description}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle>£{product.price}</Card.Subtitle>
        <Card.Text>{product.description}</Card.Text>

        {authenticated ? (
          <>
            <Button
              variant="outline-dark"
              onClick={() => handleAdditionToCartItems(quantity)}
            >
              Add to Cart
            </Button>

            <label for="quantity">Quantity:</label>
            <input
              type="number"
              min="1"
              max="10"
              name="quantity"
              id="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </>
        ) : (
          <Link to="/login">
            <Button>Login to continue</Button>
          </Link>
        )}
        {added ? <div>Added!</div> : ""}
      </Card.Body>
    </Card>
  );
}
