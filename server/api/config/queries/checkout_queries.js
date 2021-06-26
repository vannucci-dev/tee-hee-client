const stripe = require("stripe")(process.env.STRIPE_SECRET);

//POST api/checkout
const checkoutPayment = async (req, res) => {
  const { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "GBP",
      description: "Tee-hee e-commerce",
      payment_method: id,
      confirm: true,
    });

    console.log("Payment", payment);
    res.send({
      message: "Payment succesful",
      success: true,
    });
  } catch (err) {
    console.log("Error", err);
    res.send({
      message: "Payment Failed",
      success: false,
    });
  }
};

module.exports = {
  checkoutPayment,
};
