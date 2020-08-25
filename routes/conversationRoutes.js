const express = require("express");
const router = express.Router();
const isObjectIdValid = require("../middleware/isObjectIdValid");
const isEmptyBody = require("../middleware/isEmptyBody");
const {
  getAll,
  getById,
  createConversation,
  updateConversation,
} = require("../controllers/conversationController");

router.get("/:all?", getAll);

router.get("/:id", getById);

router.post("/", createConversation);

// Check if the objectid is valid

router.put("/:id", [isObjectIdValid, isEmptyBody], updateConversation);

module.exports = router;
