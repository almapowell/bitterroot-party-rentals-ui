const express = require('express');
// const { getProducts, saveProduct } = require("../controllers/productsController");
const { newProduct, getProducts } = require("../controllers/productsController");

const router = express.Router();

router.route('/get-all').get(getProducts);
router.route('/create-new').post(newProduct);

// router.route('/get-products').get(getProducts);
// router.route('/save-product').post(saveProduct);

module.exports = router;