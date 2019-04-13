// Dependencies
var passport = require("passport");
require("../../config/passport")(passport);
const router = require("express").Router();
const beatsController = require("../../controllers/beatsController");



/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Express REST API");
});

// Matches with "/api/items"
router.route("/")
	.get(beatsController.findAll)
	.post(beatsController.create);

// Matches with "/api/items/:id"
router.route("/:id")
	.get(beatsController.findById)
	.put(beatsController.update)
	.delete(beatsController.remove);

// Exporting
module.exports = router;