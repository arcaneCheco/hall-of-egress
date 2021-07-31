const Store = require("../models/Store");

exports._getAllUsers = async (req, res) => {
  // "/_allUsers", GET
  try {
    const users = await Store.find();
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.getStore = async (req, res) => {
  // "/:user", GET
  try {
    const store = await Store.findOne({ userName: req.params.userName });
    if (store) res.status(200).send(store);
    else res.send("user not found");
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.createStore = async (req, res) => {
  // "/:user", POST
  try {
    const { userName } = req.body;
    if (await Store.exists({ userName }))
      res.status(422).send("user already exists.");
    else {
      const freshStore = await Store({ userName }).save();
      res.status(201).send(freshStore);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};
