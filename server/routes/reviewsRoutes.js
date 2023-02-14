const express = require("express");
const { postReview, getReviews } = require("../controllers/reviewsController");

const router = express.Router();

// ------- Routes --------
router.route("/review").post(postReview);
router.route("/reviews").get(getReviews);

module.exports = router;
