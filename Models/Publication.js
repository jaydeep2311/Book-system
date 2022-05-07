const mongoose = require("mongoose");

const user = new mongoose.Schema({
  Name: { type: String, required: true },
});

module.exports = mongoose.model("user", user);
