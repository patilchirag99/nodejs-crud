const express = require("express");
const morgan = require("morgan");
const  productController = require("./controller/product");
const productRouter = require("./routes/product")
const userRouter = require("./routes/user")

//Create a server
const server = express();

//Middlewares
//bodyParser
server.use(express.json());
//for logging
server.use(morgan("default"));
//create static resource folder that can be accessed directly from browser
server.use(express.static("public"));
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)


//Start the server
server.listen(8086, () => {
  console.log("server started");
});
