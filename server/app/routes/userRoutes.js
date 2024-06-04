const { getAllUsers, createUser } = require("../controller/userController");

const router = require("express").Router();

// @GET all users
router.get("/", getAllUsers);

// @POST user
router.post("/", createUser);

module.exports = router;
