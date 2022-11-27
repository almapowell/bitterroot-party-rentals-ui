import React, { useState, useEffect } from "react";
import axios from 'axios';
import CustomerSummary from "../../../shared/CustomerSummary";
import QuoteTable from "../../../shared/QuoteTable";
import "./styles.css";
import LoadingIndicator from "../../../shared/LoadingIndicator";
import { useSelector } from "react-redux";

const Pending = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPendingRequests = async () => {
    await axios.get("/api/request/get-pending-requests").then((res) => {
        setPendingRequests(res.data.requests);
        setIsLoading(false);
    });
  }

  const handleDeny = async (id) => {
    await axios.delete(`/api/request/delete-rental-request/${id}`).then(() => {
      getPendingRequests();
    });
  }

  const handleConfirm = async (id) => {
    await axios.put(`/api/request/accept-rental-request/${id}`).then(() => {
      getPendingRequests();
    });
  }

  useEffect(() => {
    getPendingRequests();
  }, []);


  console.log(222, 'pending requests:', pendingRequests)
  const mockPendingRequests = useSelector(
    (state) => state.requests
  ).rentalRequests.filter((r) => r.status === "Pending");

  return (
    <div>
      { isLoading 
      ? <LoadingIndicator />
      : mockPendingRequests.map((request, index) => (
        <div
          style={{
            padding: '50px 10%',
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
            <button onClick={() => handleConfirm(request._id)}>Confirm</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pending;
