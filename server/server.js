import express from "express";

import products from "./data/Products.js";
import dotenv from "dotenv";
import conn from "./config/MongoDB.js";
dotenv.config();
conn();
const app = express();
//load products
app.get("/api/products", (req, res) => {
  res.json(products);
});

//load single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}...`));
