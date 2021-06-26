const express = require("express");
const db = require("../../config/queries/order_items_queries");

const orderItems = express.Router();

orderItems.get("/:id", db.getOrderItemsByOrderId);
orderItems.post("/", db.addNewItemInOrderItems);
orderItems.delete("/", db.deleteItemFromOrderItems);

module.exports = orderItems;
