const express = require("express");
const {
  getUserController,
  updateUserController,
  searchUserController,
} = require("../controllers/userController");

const router = express.Router();

//GET USER
router.get("/:userId", getUserController);

//UPDATE USER
router.put("/update/:userId", updateUserController);

//SEARCH USER
router.get("/search/:query", searchUserController);

module.exports = router;
