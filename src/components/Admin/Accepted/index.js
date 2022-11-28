import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CustomerSummary from "../../../shared/CustomerSummary";
import QuoteTable from "../../../shared/QuoteTable";
import LoadingIndicator from "../../../shared/LoadingIndicator";

const Accepted = () => {
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAcceptedRequests = async () => {
    await axios.get("/api/request/get-accepted-requests").then((res) => {
      setAcceptedRequests(res.data.requests);
      setIsLoading(false);
    });
  };

  const handleCancel = async (id) => {
    await axios.delete(`/api/request/delete-rental-request/${id}`).then(() => {
      getAcceptedRequests();
    });
  };

  useEffect(() => {
    getAcceptedRequests();
  }, []);

  const mockAcceptedRequests = useSelector(
    (state) => state.requests
  ).rentalRequests.filter((r) => r.status === "Accepted");

  console.log(111, "accepted requests", acceptedRequests);

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        mockAcceptedRequests.map((request, index) => (
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
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Accepted;
