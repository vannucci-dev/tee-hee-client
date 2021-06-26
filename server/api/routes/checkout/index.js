const express = require("express");
const db = require("../../config/queries/checkout_queries");

const checkout = express.Router();

checkout.post("/", db.checkoutPayment);

module.exports = checkout;
