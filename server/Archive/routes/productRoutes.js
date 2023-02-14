const express = require("express");
const {
  newProduct,
  getProducts,
  deleteProduct,
  getProductById,
} = require("../controllers/productsController");

const router = express.Router();

// ------- Routes --------
router.route("/get-all-products").get(getProducts);
router.route("/get-product/:id").get(getProductById);
router.route("/create-new").post(newProduct);
router.route("/delete-product/:id").delete(deleteProduct);

module.exports = router;
