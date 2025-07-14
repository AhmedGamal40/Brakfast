const Group = require("../models/Group");

exports.createGroup = async (req, res) => {
  try {
    const { name } = req.body;
    const group = new Group({ name });
    await group.save();
    res.status(201).json(group);
  } catch (err) {
    res.status(500).json({ error: "Failed to create group" });
  }
};


// controllers/groupController.js
exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch groups" });
  }
};
