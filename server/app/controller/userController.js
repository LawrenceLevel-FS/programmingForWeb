// @GET all users
const getAllUsers = (req, res) => {
  res.status(200).json({ users: "you hit the all users route" });
};

// POST user
const createUser = (req, res) => {
  const user = req.body;
  res.status(201).json({ user: user });
  console.log(user);
};

module.exports = { getAllUsers, createUser };
