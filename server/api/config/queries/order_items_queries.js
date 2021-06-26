const pool = require("../dbConfig");

// GET api/order-items/:id
const getOrderItemsByOrderId = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    "SELECT * FROM order_items WHERE order_id = $1",
    [id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    }
  );
};
//POST api/order-items/
const addNewItemInOrderItems = (req, res) => {
  const { quantity, price, product_id, name, description, order_id } = req.body;
  pool.query(
    "INSERT INTO order_items (quantity, price, product_id, name, description, order_id) VALUES ($1, $2, $3, $4, $5, $6)",
    [quantity, price, product_id, name, description, order_id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(201).send(req.body);
    }
  );
};

//DELETE api/order-items/
const deleteItemFromOrderItems = (req, res) => {
  const { product_id } = req.body;
  pool.query(
    "DELETE FROM order_items WHERE product_id = $1",
    [product_id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).send("Deletion confirmed.");
    }
  );
};

module.exports = {
  getOrderItemsByOrderId,
  addNewItemInOrderItems,
  deleteItemFromOrderItems,
};
