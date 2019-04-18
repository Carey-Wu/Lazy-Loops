// Dependencies
const router = require("express").Router();
const beatRoutes = require("./beats");
const userRoutes = require("./users");
const authRoutes = require("./auth");

// Item routes
router.use("/beats", beatRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

//Exporting
module.exports = router;
