const express = require("express");
const {
  saveAUser,
  getAllUsers,
  deleteAUser,
  updateAUser,
} = require("../controllers/user.controller");
const router = express.Router();
module.exports = router;

router.get("/user", getAllUsers);
router.post("/user", saveAUser);
router.delete("/user/:id", deleteAUser);
router.patch("/user/:id", updateAUser);
