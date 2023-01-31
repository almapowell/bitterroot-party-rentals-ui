const Inventory = require("../models/inventory.js");

exports.newInventory = async (req, res, next) => {
  try {
    const inventory = await Inventory.create(req.body);

    res.status(201).json({
      success: true,
      inventory,
    });
  } catch (error) {
    console.log("FOUND AN ERROR", error);
  }
};

exports.deleteInventoryItem = async (req, res, next) => {
  const inventoryItem = await Inventory.findById(req.params.id);

  if (!inventoryItem) {
    return res.status(404).json({
      success: false,
      message: "Item not found",
    });
  }

  await inventoryItem.remove();

  res.status(200).json({
    success: true,
    message: "Item is deleted",
  });
};

exports.getInventory = async (req, res, next) => {
  const inventory = await Inventory.find();

  res.status(200).json({
    inventory,
    success: true,
    count: inventory.length,
  });
};

exports.getInventoryById = async (req, res, next) => {
  const item = await Inventory.find({ _id: req.params.id });

  if (!item) {
    res.status(404).json({
      success: false,
      message: "Item not found",
    });
  } else {
    res.status(200).json({
      success: true,
      item: item[0],
    });
  }
};

exports.addImageToItem = async (req, res, next) => {
  const item = await Inventory.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { images: req.body.src } }
  );

  console.log(123, item);

  if (!item) {
    res.status(404).json({
      success: false,
      message: "Item not found",
    });
  } else {
    res.status(200).json({
      success: true,
      item: item[0],
    });
  }
};
