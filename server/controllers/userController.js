const User = require("../models/User");

exports._getAllUsers = async (req, res) => {
  // "/_allUsers", GET
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.getUser = async (req, res) => {
  // "/:user", GET
  try {
    const user = await User.findOne({ userName: req.params.userName });
    if (user) res.status(200).send(user);
    else res.send("user not found");
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.addUser = async (req, res) => {
  // "/:user", POST
  try {
    const { userName } = req.body;
    if (await User.exists({ userName }))
      res.status(422).send("user already exists.");
    else {
      const newUser = await User({ userName }).save();
      res.status(201).send(newUser);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};
