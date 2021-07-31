const router = require("express").Router();
const {
  _getAllUsers,
  getUser,
  addUser,
} = require("./controllers/userController");
// const {
//   getGalleries,
//   addGallery,
//   getGallery,
//   deleteGallery,
//   updateGalleryInfo,
// } = require("./controllers/galleryController");
// const {
//   addImage,
//   getImage,
//   deleteImage,
//   updateImageDescription,
//   updateImageSource,
// } = require("./controllers/imageController");

router.get("/_allUsers", _getAllUsers);
router.get("/:userName", getUser);
router.post("/createUser", addUser);

// router.get("/:userName/galleries", getGalleries);
// router.post("/:userName/galleries", addGallery);
// router.get("/:userName/galleries/:galleryName", getGallery);
// router.delete("/:userName/galleries/:galleryName", deleteGallery);
// router.put("/:userName/galleries/:galleryName", updateGalleryInfo);

// router.post("/:userName/galleries/:galleryName", addImage);
// router.get("/:userName/galleries/:galleryName/:imageId", getImage);
// router.post("/:userName/galleries/:galleryName/:imageId", deleteImage);
// router.put(
//   "/:userName/galleries/:galleryName/:imageId/desc",
//   updateImageDescription
// );
// router.put(
//   "/:userName/galleries/:galleryName/:imageId/source",
//   updateImageSource
// );

module.exports = router;

// https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/e15/26226928_173229776763388_8895245898469081088_n.jpg?_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_cat=104&_nc_ohc=uK9sqkzVZTUAX8mtUZr&edm=AP_V10EBAAAA&ccb=7-4&oh=97be04a34a0ebee96e06192f4f63d21e&oe=610B0F30&_nc_sid=4f375e
