const Order = require("../models/Order");

exports.getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

exports.createOrder = async (req, res) => {
  const { name, item, quantity } = req.body;
  const newOrder = new Order({ name, item, quantity });
  await newOrder.save();
  res.status(201).json(newOrder);
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const updated = await Order.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  await Order.findByIdAndDelete(id);
  res.json({ message: "Deleted successfully" });
};
