const router = require("express").Router();
const {
  getGalleries,
  getGallery,
  addGallery,
  addToGallery,
} = require("./controllers/galleryController");

router.get("/galleries", getGalleries);
router.get("/gallery/:id", getGallery);
router.post("/gallery", addGallery);
router.post("/gallery/:id", addToGallery);

module.exports = router;

// https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/e15/26226928_173229776763388_8895245898469081088_n.jpg?_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_cat=104&_nc_ohc=uK9sqkzVZTUAX8mtUZr&edm=AP_V10EBAAAA&ccb=7-4&oh=97be04a34a0ebee96e06192f4f63d21e&oe=610B0F30&_nc_sid=4f375e
