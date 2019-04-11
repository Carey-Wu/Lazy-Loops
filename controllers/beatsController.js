//Importing models
const db = require("../models");

// Defining methods for the itemsController
module.exports = {
	findAll: function(req, res) {
		db.Item.find(req.query)
			.sort({ date: -1 })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	findById: function(req, res) {
		db.Item.find({ _id: req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	create: function(req, res) {
		db.Item.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	update: function(req, res) {
		db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	},
	remove: function(req, res) {
		db.Item.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.json(err));
	}
};
