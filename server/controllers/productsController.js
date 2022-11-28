const Product = require("../models/product.js");

// Create new product => /api/product/create-new
exports.newProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log("FOUND AN ERROR", error);
  }
};

// Get all products -> /api/product/get-all
exports.getProducts = async (req, res, next) => {
  const allProducts = await Product.find();

  res.status(200).json({
    success: true,
    products: allProducts,
    count: allProducts.length,
  });
};

// Delete product -> /api/product/delete-product/:id
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    })
  };

  await product.remove();

  res.status(200).json({
    success: true,
    message: 'Product is deleted',
  });
};
