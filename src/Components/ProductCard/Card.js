import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { addToCartItems, getCartItems } from "../../utilities/axios";
import { Link } from "react-router-dom";
import "./card.css";

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
    <Card className="bigCard">
      <Card.Img
        className="bigCardImage"
        variant="top"
        src={product.image_link}
        alt={product.description}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle>£{product.price}</Card.Subtitle>
        <Card.Text className="productDescr">{product.description}</Card.Text>

        {authenticated ? (
          <div className="addToCartContainer">
            <Button
              className="addToBtn"
              variant="outline-dark"
              onClick={() => handleAdditionToCartItems(quantity)}
            >
              Add to Cart
            </Button>

            <div className="quantity">
              <label className="quantityLabel" for="quantity">
                Quantity:
              </label>
              <input
                type="number"
                min="1"
                max="10"
                name="quantity"
                id="quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <Button className="loginButton" variant="outline-warning">
              Login to continue
            </Button>
          </Link>
        )}
        {added ? <div className="added">Added!</div> : ""}
      </Card.Body>
    </Card>
  );
}
