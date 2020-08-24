const express = require("express");
const router = express.Router();
const isObjectIdValid = require("../middleware/isObjectIdValid");
const messageController = require("../controllers/messageController");

router.get("/:id", messageController.getMessages);

module.exports = router;
