const Request = require("../models/request.js");

// Create new request => /api/request/create-new
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

// Get all requests -> /api/request/get-all-requests
exports.getRequests = async (req, res, next) => {
  const allRequests = await Request.find();

  res.status(200).json({
    success: true,
    requests: allRequests,
    count: allRequests.length,
  });
};

// Get pending requests -> /api/request/get-pending-requests
exports.getPendingRequests = async (req, res, next) => {
  const pendingRequests = await Request.find({ status: "Pending" });

  res.status(200).json({
    success: true,
    requests: pendingRequests,
    count: pendingRequests.length,
  });
};

// Get accepted requests -> /api/request/get-accepted-requests
exports.getAcceptedRequests = async (req, res, next) => {
  const acceptedRequests = await Request.find({ status: "Accpeted" });

  res.status(200).json({
    success: true,
    requests: acceptedRequests,
    count: acceptedRequests.length,
  });
};

// Get completed requests -> /api/request/get-completed-requests
exports.getCompetedRequests = async (req, res, next) => {
  const completedRequests = await Request.find({ status: "Completed" });

  res.status(200).json({
    success: true,
    requests: completedRequests,
    count: completedRequests.length,
  });
};

// Set pending to accepted -> /api/request/accept-rental-request/:id
exports.approveRequest = async (req, res, next) => {
  const acceptedRequest = await Request.updateOne(
    { _id: req.params.id },
    { status: "Accpeted" }
  );

  res.status(200).json({
    success: true,
    requests: acceptedRequest,
  });
};

// Set accepted to complete -> /api/request/move-to-complete/:id
exports.completeRequest = async (req, res, next) => {
  const completeRequests = await Request.updateOne(
    { _id: req.params.id },
    { status: "Completed" }
  );

  res.status(200).json({
    success: true,
    requests: completeRequests,
  });
};

// Update existing request with edited one -> /api/request/update-rental-request/:id
exports.updateRequest = async (req, res, next) => {
  const newRequests = await Request.updateOne({ _id: req.params.id }, req.body);

  res.status(200).json({
    success: true,
    requests: newRequests,
  });
};

// Delete request -> /api/request/delete-rental-request/:id
exports.deleteRequest = async (req, res, next) => {
  const request = await Request.findById(req.params.id);

  if (!request) {
    return res.status(404).json({
      success: false,
      message: "Rental request not found",
    });
  }

  await request.remove();

  res.status(200).json({
    success: true,
    message: "Rental request is deleted",
  });
};
