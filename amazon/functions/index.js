const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IUp7FLfQ0H8PFf9BbVvvW1uQrYbtYv0BhXwlgQbMfoov2GF1YPHotubWvSY7FAEVU5ughHXf2hAGZMInwt0tBXd00b4RqVXPn");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("HELLO WORLD"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
