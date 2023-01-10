import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CustomerSummary from "../../../shared/CustomerSummary";
import QuoteTable from "../../../shared/QuoteTable";
import LoadingIndicator from "../../../shared/LoadingIndicator";
import { Modal, notification } from "antd";
import { API } from "../../../shared/utils";

const Accepted = () => {
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { confirm } = Modal;

  function showConfirm(id) {
    confirm({
      title: `Are you sure?`,
      content: `This rental request will move to Completed and this cannot be undone!!`,
      async onOk() {
        try {
          return handleMoveToComplete(id);
        } catch (e) {
          return console.log("Oops errors!");
        }
      },
      onCancel() {},
    });
  }

  const getAcceptedRequests = async () => {
    await axios.get(API + "/api/request/get-accepted-requests").then((res) => {
      setAcceptedRequests(res.data.requests);
      setIsLoading(false);
    });
  };

  const handleCancel = async (id) => {
    await axios
      .delete(API + `/api/request/delete-rental-request/${id}`)
      .then(() => {
        getAcceptedRequests();
      });
  };

  const handleMoveToComplete = async (id) => {
    await axios.put(API + `/api/request/move-to-complete/${id}`).then(() => {
      getAcceptedRequests();
    });
  };

  useEffect(() => {
    getAcceptedRequests();
  }, []);

  const mockAcceptedRequests = useSelector(
    (state) => state.requests
  ).rentalRequests.filter((r) => r.status === "Accepted");

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        acceptedRequests.map((request, index) => (
          <div
            style={{
              padding: "50px 10%",
              borderBottom: "2px solid #343434",
            }}
            key={request.id}
          >
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              Accepted #{index + 1}
            </h3>
            <CustomerSummary info={request.customerInformation} />
            <div style={{ margin: "30px 0" }}>
              <QuoteTable cartItems={request.cartItems} />
            </div>
            <div className="btn-container">
              <button onClick={() => handleCancel(request._id)}>
                Cancel Reservation
              </button>
              <button onClick={() => showConfirm(request._id)}>
                Move to Completed
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Accepted;
