const mongoose = require("./index");

const imageSchema = new mongoose.Schema({
  imageSource: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});

// const Image = mongoose.model("images", imageSchema);

module.exports = imageSchema;
