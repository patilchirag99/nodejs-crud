Basic Mongodb queries:::::



mongod --dbpath=/Users/chirag/data/db

_____________________________________________
Queries:

db.products.insertOne({ })
db.products.insertMany([
	{
	}
])

db.products.find()
db.products.find({title:"iPhone 9"})
db.products.find({title: {$eq:"iPhone 9"}})
db.products.find({rating: {$gt: 4.5}})
 db.products.findOne({"title":"iPhone 9"})

//AND operator
db.products.find({$and: [{rating: {$gt: 4.5}}, {id: {$gt: 2}}]})
db.products.find({rating: {$gt: 4.5}, id: {$gt: 2}})  //shortcut

//OR operator
db.products.find({$or: [{rating: {$gt: 4.5}}, {id: {$gt: 2}}]})

//Sort 1 -> ascending ,-1 -> descending
db.products.find({$or: [{rating: {$gt: 4.5}}, {id: {$gt: 3}}]}).sort({"price":1})

//Limit -> get top 2 products with least price and rating greater than 4.5
db.products.find({$or: [{rating: {$gt: 4.5}}, {id: {$gt: 3}}]}).sort({"price":1}).limit(2)

//Count
db.products.countDocuments()
db.products.countDocuments({'price':{$gt:600}})

//Get title and price of products greater than 600 (1 -> show , 0-> don’t how)
db.products.find({"price": {$gt :600}},{'title':1,'price':1})

//Update
db.products.updateOne({'id':1}, {$set: {'price':999}})
db.products.updateMany({'id':{$gt :3}}, {$set: {'price':999}})

//upsert - update + insert (insert if criteria doesn’t match)
db.products.updateOne({'id':8}, {$set: {'price':999}},{'upsert':true})

//Replace
db.products.replaceOne({'id':3}, {'price':1099})

//delete
db.products.deleteOne({'id':2})
db.products.deleteMany({'price':999})
