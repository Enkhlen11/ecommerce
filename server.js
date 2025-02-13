const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser());
const {
  createUser,
  userConfirm,
  retrieveUser,
  updateUser,
  getProfile,
} = require("./servers/user-routes");
const port = 4000;

app.post("/users/register", createUser);
app.post("/users/login", userConfirm);
app.get("/users/profile/:id", retrieveUser);
app.put("/users/profile", updateUser);
app.get("/users/profile", getProfile);
app.listen(port);
