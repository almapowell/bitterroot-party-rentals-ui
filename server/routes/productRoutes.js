const express = require("express");
const {
  newProduct,
  getProducts,
  deleteProduct,
} = require("../controllers/productsController");

const router = express.Router();

// ------- Routes --------
router.route("/get-all").get(getProducts);
router.route("/create-new").post(newProduct);
router.route("/delete-product/:id").delete(deleteProduct);

module.exports = router;
