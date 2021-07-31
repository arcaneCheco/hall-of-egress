const Gallery = require("../models/Gallery");
const { Image } = require("../models/Image");
// const Store = require("../models/Store");

/***** find data ********/
exports.getGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).send(galleries);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};
exports.getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findOne({ galleryName: req.params.name });
    res.status(200).send(gallery);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

/***** add data ********/
exports.addGallery = async (req, res) => {
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

exports.addToGallery = async (req, res) => {
  try {
    const addedImage = await Image(req.body);
    await addedImage.validate();

    //update gallery
    await Gallery.findOneAndUpdate(
      { galleryName: req.params.name },
      { $push: { images: addedImage } }
    );

    res.status(201).send(addedImage);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

/*****delete data *********** */
exports.deleteGallery = async (req, res) => {
  try {
    const { name } = req.params;
    // console.log(name);
    removedObj = await Gallery.findOneAndDelete({ galleryName: name });
    console.log(removedObj);
    res.status(204).send(removedGallery);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

/*****modify data ********* */
