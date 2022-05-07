const mongoose = require("mongoose");

const user = new mongoose.Schema({
  likes: { type: Number, default: 0 },
  coverImage: { type: String },
});

module.exports = mongoose.model("user", user);
