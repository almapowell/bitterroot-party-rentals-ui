const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  title: String,
  images: [String],
  price: Number,
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
