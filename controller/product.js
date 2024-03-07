//Read data from file
const fs = require("fs");
//const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
let products = data.products;


exports.createProducts = (req, res) => {
    products.push(req.body);
    res.status(201).json(req.body);
}

exports.getAllProducts = (req, res) => {
    res.json(products);
}

exports.getProduct = (req, res) => {
    const id = +req.params.id; //Adding + to convert string id to number id
    const productById = products.find((p) => p.id == id);
    res.json(productById);
  }
exports.updateProduct = (req, res) => {
    let id = +req.params.id;
    const productIndex = products.findIndex((p) => p.id == id);
    const productOld = products[productIndex]
    products.splice(productIndex,1,{...productOld , ...req.body,})
    res.json({product:"Updated"});
}
exports.replaceProduct = (req, res) => {
    let id = +req.params.id;
    const productIndex = products.findIndex((p) => p.id == id);
    products.splice(productIndex,1,{...req.body, id:id})
    res.json({product:"Updated"});
  }
exports.deleteProduct= (req, res) => {
    let id = +req.params.id;
    products = products.filter((p) => p.id !== id);
    res.json(req.body);
  }

