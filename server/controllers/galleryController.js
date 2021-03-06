const User = require("../models/User");
const Gallery = require("../models/Gallery");

exports.getGalleries = async (req, res) => {
  // "/:userName/galleries", GET
  try {
    const userName = req.params.userName;
    const user = await User.findOne({ userName });
    if (user) {
      const userId = user._id;
      const galleries = await Gallery.find({ ownerId: userId });
      res.status(200).send(galleries);
    } else {
      res.status(404).send(`user ${userName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.addGallery = async (req, res) => {
  // "/:userName/galleries", POST
  try {
    const userName = req.params.userName;
    const user = await User.findOne({ userName });
    if (user) {
      const userId = user._id;
      const { galleryName } = req.body;
      if (await Gallery.exists({ ownerId: userId, galleryName })) {
        res.status(404).send(`gallery ${galleryName} already exists`);
      } else {
        const newGallery = await Gallery({ ownerId: userId, ...req.body });
        await newGallery.validate();
        newGallery.save();
        res.status(201).send(newGallery);
      }
    } else {
      res.status(404).send(`user ${userName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.getGallery = async (req, res) => {
  // "/:userName/galleries/:galleryName", GET
  try {
    const userName = req.params.userName;
    const user = await User.findOne({ userName });
    if (user) {
      const userId = user._id;
      const { galleryName } = req.params;
      const gallery = await Gallery.findOne({ ownerId: userId, galleryName });
      res.status(200).send(gallery);
    } else {
      res.status(404).send(`user ${userName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.deleteGallery = async (req, res) => {
  // "/:userName/galleries/:galleryName", DELETE
  try {
    const userName = req.params.userName;
    const user = await User.findOne({ userName });
    if (user) {
      const userId = user._id;
      const { galleryName } = req.body;
      const deletedGallery = await Gallery.findOneAndDelete({
        ownerId: userId,
        galleryName,
      });
      res.send(deletedGallery).status(204);
    } else {
      res.status(404).send(`user ${userName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.updateGalleryInfo = async (req, res) => {
  // "/:userName/galleries/:galleryName", PUT
  try {
    const userName = req.params.userName;
    const user = await User.findOne({ userName });
    if (user) {
      const userId = user._id;
      const updatedGallery = await Gallery.findOneAndUpdate(
        { ownerId: userId, galleryName: req.params.galleryName },
        { ...req.body }
      );
      res.send(updatedGallery).status(202);
    } else {
      res.status(404).send(`user ${userName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};
