const pool = require("../dbConfig");

// GET api/cart-items/:id
const getCartItemsByCartId = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    "SELECT * FROM cart_items WHERE cart_id = $1",
    [id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    }
  );
};
//POST api/cart-items
const addNewItemInCartItems = (req, res) => {
  const { cart_id, product_id, quantity } = req.body;

  pool.query(
    "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES ($1, $2, $3)",
    [cart_id, product_id, quantity],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(201).send(req.body);
    }
  );
};
//DELETE api/cart-items/:id
const deleteItemFromCartItems = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "DELETE FROM cart_items WHERE cart_id = $1",
    [id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).send("Deletion confirmed.");
    }
  );
};
//PUT api/cart-items/:id
const modifyQuantity = (req, res) => {
  const id = parseInt(req.params.id);
  const { quantity, product_id } = req.body;
  pool.query(
    "UPDATE cart_items SET quantity = $1 WHERE cart_id = $2 AND product_id = $3",
    [quantity, id, product_id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).send("Quantity changed.");
    }
  );
};

module.exports = {
  modifyQuantity,
  getCartItemsByCartId,
  addNewItemInCartItems,
  deleteItemFromCartItems,
};
