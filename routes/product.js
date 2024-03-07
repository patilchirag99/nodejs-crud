const express = require("express");
const  productController = require("../controller/product");
const router = express.Router();

//Create products
router.post("/", productController.createProducts)
  
//Get all products
.get("/", productController.getAllProducts)

//Get product by id
.get("/:id", productController.getProduct)

//Delete  product by id
.delete("/:id", productController.deleteProduct)

//Update product by id - overrides all the properties
.put("/:id", productController.replaceProduct)

//Patch product by id - Just updates the values that are sent in request
.patch("/:id", productController.updateProduct );

exports.router = router;