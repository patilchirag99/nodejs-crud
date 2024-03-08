require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const  productController = require("./controller/product");
const productRouter = require("./routes/product")
const userRouter = require("./routes/user")
const mongoose = require('mongoose');


//Create a server-----------------------
const server = express();

//Db connection-------------------------

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("Database connected")
}



//Middlewares---------------------------
//bodyParser
server.use(express.json());
//for logging
server.use(morgan("default"));
//create static resource folder that can be accessed directly from browser
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)


//Start the server-----------------------
server.listen(process.env.PORT, () => {
  console.log("server started");
});
