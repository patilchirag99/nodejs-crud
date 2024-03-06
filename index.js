const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

//Read data from file
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
let products = data.products;

//Create a server
const server = express();

//bodyParser
server.use(express.json());
//for logging
server.use(morgan("default"));
//create static resource folder that can be accessed directly from browser
server.use(express.static("public"));

// API - Endpoint - Route

//Products
//API ROOT , base url

//Get all products
server.get("/products", (req, res) => {
  res.json(products);
});

//Get product by id
server.get("/products/:id", (req, res) => {
  const id = +req.params.id; //Adding + to convert string id to number id
  const productById = products.find((p) => p.id == id);
  res.json(productById);
});

//Create products
server.post("/products", (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
});

//Delete  product by id
server.delete("/products/:id", (req, res) => {
  let id = +req.params.id;
  products = products.filter((p) => p.id !== id);
  res.json(req.body);
});

//Update product by id - overrides all the properties
server.put("/products/:id", (req, res) => {
  let id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id == id);
  products.splice(productIndex,1,{...req.body, id:id})
  res.json({product:"Updated"});
});

//Patch product by id - Just updates the values that are sent in request
server.patch("/products/:id", (req, res) => {
    let id = +req.params.id;
    const productIndex = products.findIndex((p) => p.id == id);
    const productOld = products[productIndex]
    products.splice(productIndex,1,{...productOld , ...req.body,})
    res.json({product:"Updated"});
  });

//Start the server
server.listen(8086, () => {
  console.log("server started");
});
