const express = require("express");
const router = express.Router();
const isEmptyBody = require("../middleware/isEmptyBody");
const { postMessage } = require("../controllers/messageController");

router.post("/", isEmptyBody, postMessage);

module.exports = router;
