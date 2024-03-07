//Read data from file
const fs = require("fs");
//const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
let users = data.users;


exports.createUsers = (req, res) => {
    users.push(req.body);
    res.status(201).json(req.body);
}

exports.getAllUsers = (req, res) => {
    res.json(users);
}

exports.getUser = (req, res) => {
    const id = +req.params.id; //Adding + to convert string id to number id
    const userById = users.find((p) => p.id == id);
    res.json(userById);
  }
exports.updateUser = (req, res) => {
    let id = +req.params.id;
    const userIndex = users.findIndex((p) => p.id == id);
    const userOld = users[userIndex]
    users.splice(userIndex,1,{...userOld , ...req.body,})
    res.json({user:"Updated"});
}
exports.replaceUser = (req, res) => {
    let id = +req.params.id;
    const userIndex = users.findIndex((p) => p.id == id);
    users.splice(userIndex,1,{...req.body, id:id})
    res.json({user:"Updated"});
  }
exports.deleteUser= (req, res) => {
    let id = +req.params.id;
    users = users.filter((p) => p.id !== id);
    res.json(req.body);
  }

