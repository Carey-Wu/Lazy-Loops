// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const beatSchema = new Schema({
	beat: { type: Array, required: true },
	creator: {type: String, required: true},
	date: { type: Date, default: Date.now }
});

//Setting schema to variable
const Beat = mongoose.model("Beat", beatSchema);

//Exporting
module.exports = Beat;