const express = require("express");
const { newRequest } = require("../controllers/requestsController");

const router = express.Router();

router.route("/create").post(newRequest);

module.exports = router;
