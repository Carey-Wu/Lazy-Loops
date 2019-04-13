// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const userSchema = new Schema({
	username: { type: String, required: true },
	email: {type: String, required: true},
	password: { type: String, required: true }
});

//Setting schema to variable
const User = mongoose.model("User", userSchema);

//Exporting
module.exports = User;