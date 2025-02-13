const { users } = require("../dataBase/user-data");

//create user
const createUser = (req, res) => {
  let newUser = req.body;
  const lastUser = users.length - 1;
  newUser._id = parseFloat(lastUser + 1);
  newUser.role = "customer";
  newUser.createdAt = "date";
  newUser.updatedAt = "date";
  users.push(newUser);
  res.send(newUser);
};

//login user
const userConfirm = (req, res) => {
  const { name, password } = req.body;
  const user = users.find((user) => name === user.name);
  if (!user) {
    return res.send("lbvrtgeltei hereglegch oldsongve");
  } else if (password === user.password) {
    return res.send("confirm password");
  }
  res.send("password buruu baina");
};

const retrieveUser = (req, res) => {
  console.log(req.params);
  res.send(req.params);
};

const updateUser = (req, res) => {
  const { name, password } = req.body;
  const user = users.find((user) => {
    return user.name === name;
  });
  user.password === password;
  res.send("updated user");
};
const getProfile = (req, res) => {
  console.log(req.body);
  res.send(users);
};

module.exports = {
  createUser,
  userConfirm,
  retrieveUser,
  updateUser,
  getProfile,
};
