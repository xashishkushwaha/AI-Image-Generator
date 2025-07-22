const express = require("express");
const router = express.Router();
const {
  createPostWithImagesController_V3,
  createPostWithImagesController_V2,
  getPostsController,
  getSinglePostController,
  getUserPostsController,
  deletePostController,
  likePostController,
  dislikePostController,
} = require("../controllers/postController");

//CREATE POST WITH IMAGES V3
router.post("/create/v3/:userId", createPostWithImagesController_V3);
//CREATE POST WITH IMAGES V3
router.post("/create/v2/:userId", createPostWithImagesController_V2);

//GET ALL POSTS
router.get("/all", getPostsController);

//GET SINGLE POST
router.get("/single/:postId", getSinglePostController);

//GET USER POSTS
router.get("/user/:userId", getUserPostsController);

//DELETE POST
router.delete("/delete/:postId", deletePostController);

//LIKE POST
router.post("/like/:postId", likePostController);

//DISLIKE POST
router.post("/dislike/:postId", dislikePostController);

module.exports = router;
