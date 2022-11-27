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
  await Product.deleteOne({_id: req.params.id}, (error) => {
    if(error) throw error;
  });

  res.status(200).json({
    success: true,
    products: deletedProduct,
  });
};
