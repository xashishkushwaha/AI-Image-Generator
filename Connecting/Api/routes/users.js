const express = require("express");
const {
  getUserController,
  updateUserController,
  buyCredit,
} = require("../controllers/userController");
const router = express.Router();

//GET USER
router.get("/:userId", getUserController);

//UPDATE USER
router.put("/update/:userId", updateUserController);

//BUY CREDIT
router.put("/credit/:userId", buyCredit);

module.exports = router;
