const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: String,
    item: String,
    quantity: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
