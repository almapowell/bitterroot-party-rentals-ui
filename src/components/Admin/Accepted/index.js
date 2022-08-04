import React from "react";
import { useSelector } from "react-redux";
import CustomerSummary from "../../../shared/CustomerSummary";
import QuoteTable from "../../../shared/QuoteTable";

const Accepted = () => {
  const accpeted = useSelector((state) => state.requests).rentalRequests.filter(
    (r) => r.status === "Accepted"
  );

  return (
    <div>
      {accpeted.map((request, index) => (
        <div
          style={{
            paddingBottom: 50,
            marginBottom: 50,
            borderBottom: "1px solid #777",
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
            <button>Cancel Reservation</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accepted;
