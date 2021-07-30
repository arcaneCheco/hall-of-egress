const mongoose = require("./index");
const Gallery = require("./Gallery");

const storeSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  galleries: {
    type: [Gallery],
    default: [],
  },
});

const Store = mongoose.model("stores", storeSchema);

module.exports = Store;
