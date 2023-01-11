import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerSummary from "../../../shared/CustomerSummary";
import QuoteTable from "../../../shared/QuoteTable";
import "./styles.css";
import LoadingIndicator from "../../../shared/LoadingIndicator";
import { useSelector } from "react-redux";
import { Modal, notification } from "antd";
import moment from "moment";
import { API } from "../../../shared/utils";

const Pending = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { confirm } = Modal;

  const successfulNotification = ({ first, last }) => {
    notification["success"]({
      message: "Rental Request Updated",
      description: `You have approved ${first} ${last}'s rental request.`,
    });
  };

  const getPendingRequests = async () => {
    await axios.get(API + "/api/request/get-pending-requests").then((res) => {
      setPendingRequests(res.data.requests);
      setIsLoading(false);
    });
  };

  const handleDeny = async (id) => {
    await axios
      .delete(API + `/api/request/delete-rental-request/${id}`)
      .then(() => {
        getPendingRequests();
      });
  };

  const handleConfirm = async (request) => {
    await axios
      .put(`/api/request/accept-rental-request/${request._id}`)
      .then(() => {
        getPendingRequests();
        successfulNotification(request.customerInformation);
      });
  };

  useEffect(() => {
    getPendingRequests();
  }, []);

  function showConfirm(request) {
    confirm({
      title: `Are you sure you want to approve ${request.customerInformation.first} ${request.customerInformation.last}?`,
      content: `This rental request will move to Approved and the event date is   ${moment(
        request.customerInformation.date
      ).format("MMMM Do YYYY")}`,
      async onOk() {
        try {
          return handleConfirm(request);
        } catch (e) {
          return console.log("Oops errors!");
        }
      },
      onCancel() {},
    });
  }

  console.log(222, "pending requests:", pendingRequests);
  const mockPendingRequests = useSelector(
    (state) => state.requests
  ).rentalRequests.filter((r) => r.status === "Pending");

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        pendingRequests.map((request, index) => (
          <div
            style={{
              padding: "50px 10%",
              borderBottom: "2px solid #343434",
            }}
            key={request.id}
          >
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              Pending #{index + 1}
            </h3>
            <CustomerSummary info={request.customerInformation} />
            <div style={{ margin: "30px 0" }}>
              <QuoteTable cartItems={request.cartItems} />
            </div>
            <div className="btn-container">
              <button onClick={() => handleDeny(request._id)}>Deny</button>
              <button onClick={() => showConfirm(request)}>Confirm</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Pending;
