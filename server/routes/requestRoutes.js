const express = require("express");
const { newRequest, getRequests, getPendingRequests, getAcceptedRequests, approveRequest, deleteRequest } = require("../controllers/requestsController");

const router = express.Router();

// ------- Routes --------
router.route("/create").post(newRequest);
router.route("/get-all-requests").get(getRequests);
router.route("/get-pending-requests").get(getPendingRequests);
router.route("/get-accepted-requests").get(getAcceptedRequests);
router.route("/accept-rental-request/:id").put(approveRequest);
router.route("/delete-rental-request/:id").delete(deleteRequest);

module.exports = router;
