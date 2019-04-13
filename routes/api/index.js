// Dependencies
const router = require("express").Router();
const beatRoutes = require("./beats");
const userRoutes = require("./users");

// Item routes
router.use("/beats", beatRoutes);
router.use("/users", userRoutes);

//Exporting
module.exports = router;
