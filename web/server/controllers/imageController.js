const Gallery = require("../models/Gallery");
const Image = require("../models/Image");

exports.addImage = async (req, res) => {
  // "/:userName/galleries/:galleryName", POST
  try {
    const galleryName = req.params.galleryName;
    const gallery = await Gallery.findOne({ galleryName });
    if (gallery) {
      const galleryId = gallery._id;
      const newImage = await Image({ ownerId: galleryId, ...req.body });
      await newImage.validate();
      newImage.save();
      res.send(newImage).status(201);
    } else {
      res.status(404).send(`gallery ${galleryName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.getImages = async (req, res) => {
  // "/:userName/galleries/:galleryName/images", GET
  try {
    const galleryName = req.params.galleryName;
    const gallery = await Gallery.findOne({ galleryName });
    if (gallery) {
      const galleryId = gallery._id;
      const images = await Image.find({ ownerId: galleryId });
      res.status(200).send(images);
    } else {
      res.status(404).send(`gallery ${galleryName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.getImage = async (req, res) => {
  // "/:userName/galleries/:galleryName/:imageId", GET
  try {
    const galleryName = req.params.galleryName;
    const gallery = await Gallery.findOne({ galleryName });
    if (gallery) {
      const galleryId = gallery._id;
      const { imageId } = req.params;
      const image = await Image.findOne({ ownerId: galleryId, _id: imageId });
      res.status(200).send(image);
    } else {
      res.status(404).send(`gallery ${galleryName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.deleteImage = async (req, res) => {
  // "/:userName/galleries/:galleryName/:imageId", DELETE
  try {
    const galleryName = req.params.galleryName;
    const gallery = await Gallery.findOne({ galleryName });
    if (gallery) {
      const galleryId = gallery._id;
      const deletedImage = await Image.findOneAndDelete({
        ownerId: galleryId,
        _id: req.params.imageId,
      });
      res.send(deletedImage).status(204);
    } else {
      res.status(404).send(`gallery ${galleryName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.updateImageDescription = async (req, res) => {
  // "/:userName/galleries/:galleryName/:imageId/description", PUT
  try {
    const galleryName = req.params.galleryName;
    const gallery = await Gallery.findOne({ galleryName });
    if (gallery) {
      const galleryId = gallery._id;
      const newDescription = req.body.imageDescription || "";
      const updatedImage = await Image.findOneAndUpdate(
        { ownerId: galleryId, _id: req.params.imageId },
        { imageDescription: newDescription }
      );
      res.send(updatedImage).status(202);
    } else {
      res.status(404).send(`gallery ${galleryName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.updateImageSource = async (req, res) => {
  // "/:userName/galleries/:galleryName/:imageId/source", PUT
  try {
    const galleryName = req.params.galleryName;
    const gallery = await Gallery.findOne({ galleryName });
    if (gallery) {
      const galleryId = gallery._id;
      const newSource = req.body.imageSource;
      if (newSource) {
        const updatedImage = await Image.findOneAndUpdate(
          { ownerId: galleryId, _id: req.params.imageId },
          { imageSource: newSource }
        );
        res.send(updatedImage).status(202);
      } else {
        res.send("psychic owl needs an image path 🦉").status(404);
      }
    } else {
      res.status(404).send(`gallery ${galleryName} does not exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};
