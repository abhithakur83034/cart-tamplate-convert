require("dotenv").config();
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(cors());

app.use("/img", express.static("./uploads"));

const userRoute = require("./route/userRoute");
const adminRoute = require("./route/adminroute");
const productRoute = require("./route/productRoute");
const feedbackRoute = require("./route/fedbackRoute");
const addressRouter = require("./route/addressRouter");
const profileRouter = require("./route/profileRoute");
const contactRouter = require("./route/contactroute")


app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/product", productRoute);
app.use("/fb", feedbackRoute);
app.use("/address", addressRouter);
app.use("/profile", profileRouter);
app.use("/contact",contactRouter)
// checkout payment=======================

app.post("/api/create-checkout-session", async (req, res) => {
  console.log("stripe",req.body)
  const products = req.body.carts;
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
        // images:[product.image]
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id });
});
module.exports = app;
