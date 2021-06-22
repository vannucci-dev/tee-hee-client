const express = require("express");
const products = require("./routes/products");
const users = require("./routes/users");
const carts = require("./routes/cart");
const auth = require("./routes/auth");
const orders = require("./routes/order");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");
const cart_items = require("./routes/cart_items");

const swaggerDocument = yaml.load(
  fs.readFileSync(path.resolve(__dirname, "../swagger.yml"), "utf8")
);

const api = express.Router();

api.get("/", (req, res) => {
  res.redirect("/api/docs");
});

api.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

api.use("/users", users);
api.use("/carts", carts);
api.use("/cart-items", cart_items);
api.use("/products", products);
api.use("/auth", auth);
api.use("/order", orders);

module.exports = api;
