require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(express.json()); //body-parser

app.use(router);

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server running at http://localhost:${PORT}👂`);
});
