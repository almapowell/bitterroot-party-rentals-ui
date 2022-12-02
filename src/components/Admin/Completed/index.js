import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CustomerSummary from "../../../shared/CustomerSummary";
import QuoteTable from "../../../shared/QuoteTable";
import LoadingIndicator from "../../../shared/LoadingIndicator";

const Completed = () => {
  const [completedRequests, setCompletedRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCompletedRequests = async () => {
    await axios.get("/api/request/get-completed-requests").then((res) => {
      setCompletedRequests(res.data.requests);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getCompletedRequests();
  }, []);

  const mockCompletedRequests = useSelector(
    (state) => state.requests
  ).rentalRequests.filter((r) => r.status === "Completed");

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        completedRequests.map((request, index) => (
          <div
            style={{
              padding: "50px 10%",
              borderBottom: "2px solid #343434",
            }}
            key={request.id}
          >
            <h3 style={{ display: "flex", justifyContent: "center" }}>
              Completed #{index + 1}
            </h3>
            <CustomerSummary info={request.customerInformation} />
            <div style={{ margin: "30px 0" }}>
              <QuoteTable cartItems={request.cartItems} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Completed;
