import React from "react";
import { useSelector } from "react-redux";
import CustomerSummary from "../../../shared/CustomerSummary";
import QuoteTable from "../../../shared/QuoteTable";

const Upcoming = () => {
  const accpeted = useSelector((state) => state.requests).rentalRequests.filter(
    (r) => r.status === "Upcoming"
  );

  return (
    <div>
      {accpeted.map((request, index) => (
        <div
          style={{
            padding: '50px 10%',
            borderBottom: "2px solid #343434",
          }}
          key={request.id}
        >
          <h3 style={{ display: "flex", justifyContent: "center" }}>
            Upcoming #{index + 1}
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

export default Upcoming;
