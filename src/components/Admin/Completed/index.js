import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerSummary from "../../../shared/CustomerSummary";
import QuoteTable from "../../../shared/QuoteTable";
import LoadingIndicator from "../../../shared/LoadingIndicator";
import { API, jordanError } from "../../../shared/utils";

const Completed = () => {
  const [completedRequests, setCompletedRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getCompletedRequests = async () => {
    await axios
      .get(API + "/api/request/get-completed-requests")
      .then((res) => {
        setCompletedRequests(res.data.requests);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Screenshot this error here: " + err);
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCompletedRequests();
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : isError ? (
        jordanError
      ) : completedRequests === 0 ? (
        <h2>No completed requests</h2>
      ) : (
        completedRequests.map((request, index) => (
          <div
            style={{
              padding: "50px 10%",
              borderBottom: "2px solid #343434",
            }}
            key={request._id}
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
