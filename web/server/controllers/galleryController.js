const { Gallery } = require("../models/Gallery");

exports.getGalleries = async (req, res) => {
  // "/:userName/galleries", GET
  try {
    const galleries = await Gallery.find();
    res.status(200).send(galleries);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.addGallery = async (req, res) => {
  // "/:userName/galleries", POST
  try {
    const { galleryName } = req.body;
    if (await Gallery.exists({ galleryName }))
      res.status(422).send("gallery already exists.");
    else {
      const addedGallery = await Gallery({ galleryName }).save();
      res.status(201).send(addedGallery);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.getGallery = async (req, res) => {
  // "/:userName/galleries/:galleryName", GET
  try {
    const gallery = await Gallery.findOne({ galleryName: req.params.name });
    res.status(200).send(gallery);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.deleteGallery = async (req, res) => {
  // "/:userName/galleries/:galleryName", DELETE
  try {
    const { name } = req.params;
    const removedGallery = await Gallery.findOneAndDelete({
      galleryName: name,
    });
    res.status(204).send(removedGallery);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.updateGalleryInfo = async (req, res) => {
  // "/:userName/galleries/:galleryName", PUT
  try {
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};
