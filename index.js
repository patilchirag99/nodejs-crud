require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const  productController = require("./controller/product");
const productRouter = require("./routes/product")
const userRouter = require("./routes/user")


//Create a server-----------------------
const server = express();


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
