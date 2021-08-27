const mongoose = require("./index");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
