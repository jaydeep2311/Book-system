const userModel = require("../Models/user");
const { default: mongoose } = require("mongoose");

async function creatUser(req, res, next) {
  const userDetail = req.body;

  let response = userModel.insertOne(userDetail);
  res.json(response);
}
module.exports = {
  creatUser,
};
