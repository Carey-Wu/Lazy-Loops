// Dependencies
const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
	.get(usersController.findAll)
	.post(usersController.create);

// Exporting
module.exports = router;
