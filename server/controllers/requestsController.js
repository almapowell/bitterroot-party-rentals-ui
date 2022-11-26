const Request = require("../models/request.js");

// Create new product => /api/product/create-new
exports.newRequest = async (req, res, next) => {
  try {
    const request = await Request.create(req.body);

    res.status(201).json({
      success: true,
      request,
    });
  } catch (error) {
    console.log("FOUND AN ERROR", error);
  }
};
