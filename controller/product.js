//Read data from file
const fs = require("fs");
const mongoose = require("mongoose");
const model = require("../model/product");
const Product = model.Product;

//Create
exports.createProducts = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProd = await product.save();
    res.status(201).json(savedProd);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getProduct = async(req, res) => {
  const id = req.params.id; //Adding + to convert string id to number id
  try {
    const getProduct = await Product.findById(id);
    res.json(getProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateProduct = async (req, res) => {
  let id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
    res.json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.replaceProduct = async (req, res) => {
  let id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true});
    res.json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.deleteProduct = async (req, res) => {
  let id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete({_id:id},req.body);
    res.json(doc);
  } catch (error) {
    console.log({error});
    res.status(400).json(error);
  }
};
