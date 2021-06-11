const express = require("express");
const db = require("../../config/queries/cart_items_queries");

const cart_items = express.Router();

cart_items.get("/:id", db.getCartItemsByCartId);
cart_items.post("/", db.addNewItemInCartItems);
cart_items.delete("/:id", db.deleteItemFromCartItems);
cart_items.put("/:id", db.modifyQuantity);

module.exports = cart_items;
