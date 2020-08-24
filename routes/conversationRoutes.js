const express = require("express");
const router = express.Router();
const isObjectIdValid = require("../middleware/isObjectIdValid");
const conversationcontroller = require("../controllers/conversationController");

router.get("/", conversationcontroller.getAll);

module.exports = router;

