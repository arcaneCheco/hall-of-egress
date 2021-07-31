const { Image } = require("../models/Image");

exports.addImage = async (req, res) => {
  // "/:userName/galleries/:galleryName", POST
  try {
    const addedImage = await Image(req.body);
    await addedImage.validate();

    const { name } = req.params;
    if (!(await Gallery.exists({ galleryName: name })))
      res.status(404).send("gallery does not exist..");

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

exports.getImage = async (req, res) => {
  // "/:userName/galleries/:galleryName/:imageId", GET
  try {
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.deleteImage = async (req, res) => {
  // "/:userName/galleries/:galleryName/:imageId", DELETE
  try {
    const { name, id } = req.params;
    const updatedGallery = await Gallery.findOneAndUpdate(
      { galleryName: name },
      { $pull: { images: { _id: id } } }
    );
    res.status(204).send(updatedGallery);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.updateImageDescription = async (req, res) => {
  // "/:userName/galleries/:galleryName/:imageId/desc", PUT
  try {
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};
exports.updateImageSource = async (req, res) => {
  // "/:userName/galleries/:galleryName/:imageId/source", PUT
  try {
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};
