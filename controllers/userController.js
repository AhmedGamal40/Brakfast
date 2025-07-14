const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { username, groupId } = req.body;
    const user = new User({ username, groupId });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

exports.getUsersByGroup = async (req, res) => {
  const { groupId } = req.params;
  const users = await User.find({ groupId });
  res.json(users);
};

exports.getUserCount = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Failed to get user count" });
  }
};

