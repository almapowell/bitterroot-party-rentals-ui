const Archives = require("../models/archives.js");

// Get all archives -> /api/archives/get-all-archives
exports.getArchived = async (req, res, next) => {
  const allArchives = await Archives.find();

  res.status(200).json({
    success: true,
    requests: allArchives,
    count: allArchives.length,
  });
};

// Create new archive => /api/archives/create
exports.newArchive = async (req, res, next) => {
  try {
    await Archives.create(req.body);

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    console.log("FOUND AN ERROR", error);
  }
};
