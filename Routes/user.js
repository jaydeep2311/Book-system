const express = require("express");
const app = express();
const userController = require("../Controllers/user");
const bodyParser = require("body-parser");
app.use(bodyParser.json([]));

app.post("/user", userController.creatUser);

app.post("");

module.exports = app;
