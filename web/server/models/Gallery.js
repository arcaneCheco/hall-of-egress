const mongoose = require("./index");
const { imageSchema } = require("./Image");

const gallerySchema = new mongoose.Schema({
  galleryName: {
    type: String,
    required: true,
  },
  galleryDescription: {
    type: String,
    default: "",
  },
  images: {
    type: [imageSchema],
    default: [],
  },
});

const Gallery = mongoose.model("galleries", gallerySchema);

module.exports = { Gallery, gallerySchema };
