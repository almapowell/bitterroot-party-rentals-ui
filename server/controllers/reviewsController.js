const Reviews = require("../models/reviews");

exports.postReview = async (req, res, next) => {
  try {
    await Reviews.create(req.body);

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    console.log("FOUND AN ERROR", error);
  }
};

exports.getReviews = async (req, res, next) => {
  const reviews = await Reviews.find().where("testimony").ne(undefined);

  res.status(200).json({
    reviews,
    success: true,
    count: reviews.length,
  });
};
