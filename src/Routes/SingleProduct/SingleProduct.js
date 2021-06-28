import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import "./singleProduct.css";
import capitalize from "../../utilities/utility";
import {
  addToCartItems,
  getCartItems,
  getProduct,
} from "../../utilities/axios";
import { Link } from "react-router-dom";

export default function SingleProduct({
  cart,
  handleCartItems,
  handleItems,
  authenticated,
}) {
  const [productSingle, setProductSingle] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [added, setAdded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchProductAndSet = async () => {
      let response = await getProduct(id);
      setProductSingle(response);
    };
    fetchProductAndSet();
  }, [id]);

  const handleAdditionToCartItems = async (newQuantity) => {
    let cartID = await addToCartItems(cart, id, newQuantity);
    let newCartItems = await getCartItems(cartID);
    handleCartItems(newCartItems);
    handleItems(productSingle[0]);
    setAdded(true);
  };

  return (
    <Container>
      {productSingle.slice(0, 1).map((product) => {
        return (
          <Row>
            <Col className="img-col">
              <img
                alt={product.name}
                className="single-img"
                src={product.image_link}
              />
            </Col>
            <Col className="text-col">
              <h4>{capitalize(product.name)}</h4>
              <p className="category-tag">{capitalize(product.category)}</p>
              <h3>£{product.price}</h3>
              <p>{capitalize(product.description)}</p>
              {authenticated ? (
                <>
                  <label for="quantity">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    name="quantity"
                    id="quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                  />

                  <Button
                    onClick={() => handleAdditionToCartItems(quantity)}
                    variant="outline-dark"
                  >
                    Add to Cart
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button>Login to continue</Button>
                </Link>
              )}
              {added ? <div>Added!</div> : ""}
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
