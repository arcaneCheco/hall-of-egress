const Store = require("../models/Store");
const { Gallery } = require("../models/Gallery");

exports.getGalleries = async (req, res) => {
  // "/:userName/galleries", GET
  try {
    const userName = req.params.userName;
    const store = await Store.findOne({ userName });
    if (!store) res.status(404).send(`user ${userName} does not exist`);
    else res.status(200).send(store.galleries);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

exports.addGallery = async (req, res) => {
  // "/:userName/galleries", POST
  try {
    const userName = req.params.userName;
    const store = await Store.findOne({ userName });
    if (!store) res.status(404).send(`user ${userName} does not exist`);
    else {
      const { galleryName } = req.body;

      // if (await Gallery.exists({ galleryName }))
      if (
        store.galleries
          .map((gallery) => gallery.galleryName)
          .includes(galleryName)
      )
        res.status(422).send("gallery already exists.");
      else {
        const addedGallery = await Gallery({ galleryName });
        await addedGallery.validate();

        await Store.findOneAndUpdate(
          { userName },
          { $push: { galleries: addedGallery } }
        );
        res.status(201).send(addedGallery);
      }
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
