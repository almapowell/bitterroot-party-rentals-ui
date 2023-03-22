const express = require("express");
const {
  getArchived,
  newArchive,
} = require("../controllers/archivedController");

const router = express.Router();

// ------- Routes --------
router.route("/get-all-archives").get(getArchived);
router.route("/create").post(newArchive);

module.exports = router;
