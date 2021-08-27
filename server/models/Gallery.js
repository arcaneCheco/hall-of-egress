const mongoose = require("./index");

const gallerySchema = new mongoose.Schema({
  ownerId: {
    type: String,
    required: true,
  },
  galleryName: {
    type: String,
    required: true,
  },
  galleryDescription: {
    type: String,
    default: "",
  },
});

const Gallery = mongoose.model("galleries", gallerySchema);

module.exports = Gallery;
