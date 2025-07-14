const Order = require("../models/Order");

exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate("userId");
  res.json(orders);
};

exports.getOneOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id).populate("userId");
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { userId, items } = req.body;
    if (!userId || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Invalid order data" });
    }
    const newOrder = new Order({ userId, items });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Order.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update order" });
  }
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  await Order.findByIdAndDelete(id);
  res.json({ message: "Deleted successfully" });
};
