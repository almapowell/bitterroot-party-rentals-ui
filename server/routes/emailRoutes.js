const express = require("express");
const { contactForm, requestForm } = require("../controllers/emailController");

const router = express.Router();

// ------- Routes --------
router.route("/contact-form").post(contactForm);
router.route("/request-form").post(requestForm);

module.exports = router;
