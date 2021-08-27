const mongoose = require("mongoose");

const dbName = process.env.DB_NAME || "DB_HALL_OF_EGRESS";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.connect(`mongodb://localhost:27017/${dbName}`, options);

module.exports = mongoose;
