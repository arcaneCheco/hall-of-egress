const mongoose = require("./index");

const imageSchema = new mongoose.Schema({
  ownerId: {
    type: String,
    required: true,
  },
  imageSource: {
    type: String,
    required: true,
  },
  imageDescription: {
    type: String,
    default: "",
  },
});

const Image = mongoose.model("images", imageSchema);

module.exports = Image;
