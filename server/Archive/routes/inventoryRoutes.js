const express = require("express");
const {
  newInventory,
  getInventory,
  deleteInventoryItem,
  getInventoryById,
  addImageToItem,
  updateDescription,
} = require("../controllers/inventoryController");

const router = express.Router();

router.route("/add-image/:id").post(addImageToItem);
router.route("/update-description/:id").put(updateDescription);
router.route("/new-item").post(newInventory);
router.route("/inventory-item/:id").get(getInventoryById);
router.route("/all-inventory").get(getInventory);
router.route("/delete-item/:id").delete(deleteInventoryItem);

module.exports = router;
