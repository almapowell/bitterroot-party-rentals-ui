import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerSummary from "../../../shared/CustomerSummary";
import QuoteTable from "../../../shared/QuoteTable";
import "./styles.css";
import LoadingIndicator from "../../../shared/LoadingIndicator";
import { Modal, notification } from "antd";
import moment from "moment";
import { API, jordanError } from "../../../shared/utils";

const Pending = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestToEdit, setRequestToEdit] = useState(null);

  const showModal = (request) => {
    setRequestToEdit(request);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    handleDeny(requestToEdit);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setRequestToEdit(null);
    setIsModalOpen(false);
  };

  const { confirm } = Modal;

  const successfulNotification = ({ first, last }) => {
    notification["success"]({
      message: "Rental Request Updated",
      description: `You have approved ${first} ${last}'s rental request.`,
    });
  };

  const getPendingRequests = async () => {
    await axios
      .get(API + "/api/request/get-pending-requests")
      .then((res) => {
        setPendingRequests(res.data.requests);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Screenshot this error here: " + err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  const handleDeny = async (request) => {
    await axios.post(API + "/api/archives/create", request);
    await axios
      .delete(API + `/api/request/delete-rental-request/${request._id}`)
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

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : isError ? (
        jordanError
      ) : pendingRequests.length === 0 ? (
        <h2>No pending requests</h2>
      ) : (
        pendingRequests.map((request, index) => (
          <div
            style={{
              padding: "50px 10%",
              borderBottom: "2px solid #343434",
            }}
            key={request._id}
          >
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              Pending #{index + 1}
            </h3>
            <CustomerSummary info={request.customerInformation} />
            <div style={{ margin: "30px 0" }}>
              <QuoteTable cartItems={request.cartItems} />
            </div>
            <div className="btn-container">
              <button onClick={() => showModal(request)}>Deny</button>
              <button onClick={() => showConfirm(request)}>Confirm</button>
            </div>
          </div>
        ))
      )}

      <Modal
        title="Are you sure??"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>This will completely remove this pending rental request.</p>
      </Modal>
    </div>
  );
};

export default Pending;
