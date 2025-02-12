let { users } = require("../dataBase/user-data");

const createUser = (req, res) => {
  // const { name, email, password } = req.body;
  console.log(req.body);
  users.push(req.body);
  res.send("add");
};

const getProfile = (req, res) => {
  console.log(req.body);
  res.send(users);
};

module.exports = { createUser, getProfile };
