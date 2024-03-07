const express = require("express");
const  userController = require("../controller/user");
const router = express.Router();

//Create products
router.post("/", userController.createUsers)
  
//Get all products
.get("/", userController.getAllUsers)

//Get product by id
.get("/:id", userController.getUser)

//Delete  product by id
.delete("/:id", userController.deleteUser)

//Update product by id - overrides all the properties
.put("/:id", userController.replaceUser)

//Patch product by id - Just updates the values that are sent in request
.patch("/:id", userController.updateUser );

exports.router = router;