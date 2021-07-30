const Gallery = require("../models/Gallery");
// const Store = require("../models/Store");

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
  //   try {
  //     const gallery = await Gallery.findById(req.params._id);
  //     res.status(200).send(gallery);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(404);
  //   }
};
exports.addGallery = async (req, res) => {
  try {
    const { galleryName } = req.body;
    console.log(galleryName);
    const addedGallery = await Gallery({ galleryName }).save();
    res.status(201).send(addedGallery);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.addToGallery = async (req, res) => {};

//   exports.postEvent = async (req, res) => {
//     try {
//       const eventInfo = req.body;
//       const postedEvent = await Event(eventInfo).save();
//       res.status(201).send(postedEvent);
//     } catch (error) {
//       console.log(error);
//     }
//   };
