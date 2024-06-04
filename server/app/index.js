const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const router = express.Router();
const cors = require("cors");

const port = process.env.PORT || 3000;

// * http://localhost:3000
router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: `${req.method} - was made successfully` });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// importing Routes
const UsersRoute = require("./routes/userRoutes");

// Using Routes
router.use("/signup", UsersRoute);
module.exports = { port, app, express, router };
