const router = require("express").Router();

// @GET all users
router.get("/", (req, res) => {
  res.status(200).json({ users: "you hit the all users route" });
});

module.exports = router;
