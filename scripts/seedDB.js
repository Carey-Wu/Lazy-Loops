// Dependencies
const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Items & Users collections and inserts the items & users below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/lazy_loops",
	{ useNewUrlParser: true }
);

const beatsSeed = [
	{
		beat: [],
		creator: "",
		date: new Date(Date.now())
	}
];

const userSeed = [
	{
        username: "Test",
        email: "test@test.com",
		password: "test1"
	}
];

db.Beat.remove({})
	.then(() => db.Item.collection.insertMany(beatsSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});

db.User.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});