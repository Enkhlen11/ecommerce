const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser());
const { createUser, getProfile } = require("./servers/user-routes");
const port = 4000;
app.post("/users/register", createUser);

app.get("/users/profile", getProfile);
app.listen(port);
