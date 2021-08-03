const router = require("express").Router();
const {
  _getAllUsers,
  getUser,
  addUser,
} = require("./controllers/userController");
const {
  getGalleries,
  addGallery,
  getGallery,
  deleteGallery,
  updateGalleryInfo,
} = require("./controllers/galleryController");
const {
  //   getAllImages,
  getImages,
  addImage,
  getImage,
  deleteImage,
  updateImageDescription,
  updateImageSource,
} = require("./controllers/imageController");

router.get("/_allUsers", _getAllUsers);
router.get("/:userName", getUser);
router.post("/createUser", addUser);

router.get("/:userName/galleries", getGalleries);
router.post("/:userName/galleries", addGallery);
router.get("/:userName/galleries/:galleryName", getGallery);
router.delete("/:userName/galleries/:galleryName", deleteGallery);
router.put("/:userName/galleries/:galleryName", updateGalleryInfo);

// router.get("/:userName/images", getAllImages); // get all images rom every gallery that the user owns
router.get("/:userName/galleries/:galleryName/images", getImages);
router.post("/:userName/galleries/:galleryName", addImage);
router.get("/:userName/galleries/:galleryName/:imageId", getImage);
router.delete("/:userName/galleries/:galleryName/:imageId", deleteImage);
router.put(
  "/:userName/galleries/:galleryName/:imageId/description",
  updateImageDescription
);
router.put(
  "/:userName/galleries/:galleryName/:imageId/source",
  updateImageSource
);

module.exports = router;
