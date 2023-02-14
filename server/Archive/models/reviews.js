const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  stars: Number,
  gender: String,
  testimony: String,
  name: String,
});

const Reviews = mongoose.model("Reviews", reviewSchema);

module.exports = Reviews;
