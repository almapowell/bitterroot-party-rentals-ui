import React from "react";

const CustomerSummary = ({ info }) => {
  return (
    <div className="info-table-wrapper">
      <div className="info-item">
        <p>Name:</p>
        <div>
          <span>{info.first}</span>
          <span>{info.last}</span>
        </div>
      </div>
      <div className="info-item">
        <p>Email:</p>
        <div>{info.email}</div>
      </div>
      <div className="info-item">
        <p>Phone:</p>
        <div>{info.phone}</div>
      </div>
      <div className="info-item">
        <p>Venue Address:</p>
        <div>
          <span>{info.address}</span>
        </div>
      </div>

      <div className="info-item">
        <p>Date:</p>
        <div>{info.date}</div>
      </div>

      <div className="info-item">
        <p>Deliver / Pickup:</p>
        <div>{info.delivery ? "Yes" : "No"}</div>
      </div>

      <div className="info-item">
        <p>Addition Notes:</p>
        <div>{info.notes}</div>
      </div>
    </div>
  );
};

export default CustomerSummary;
