const mongoose = require("./index");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("stores", userSchema);

module.exports = User;
