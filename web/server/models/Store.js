const mongoose = require("./index");
const { gallerySchema } = require("./Gallery");

const storeSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  galleries: {
    type: [gallerySchema],
    default: [],
  },
});

const Store = mongoose.model("stores", storeSchema);

module.exports = Store;
