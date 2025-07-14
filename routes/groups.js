const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

// routes/groups.js
router.get("/", groupController.getAllGroups);
router.post("/", groupController.createGroup);



module.exports = router;
