import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import "./styles.css";
import EditRequest from "./EditRequest";

const EditRequests = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState({});

  const getAllRequests = async () => {
    await axios.get("/api/request/get-all-requests").then((res) => {
      setRequests(res.data.requests);
    });
  };

  useEffect(() => {
    getAllRequests();
  }, [selectedRequest]);

  return (
    <div className="request-cards-container">
      {Object.keys(selectedRequest).length ? (
        <EditRequest
          selectedRequest={selectedRequest}
          setSelectedRequest={setSelectedRequest}
        />
      ) : (
        requests.map((request) => {
          const { first, last, email, address, phone } =
            request.customerInformation;
          return (
            <Card
              title={`${first} ${last}`}
              extra={
                <span
                  className="edit-link"
                  onClick={() => setSelectedRequest(request)}
                >
                  Edit
                </span>
              }
              style={{ width: 400 }}
            >
              <p>
                <b>Email:</b> {email}
              </p>
              <p>
                <b>Address:</b>
                {address}
              </p>
              <p>
                <b>Phone:</b> {phone}
              </p>
              <p>
                <b>Status:</b> {request.status}
              </p>
              <p>
                <b>Cart Items:</b> {request.cartItems.length}
              </p>
              {request.cartItems.map((item) => (
                <div className="last-item">
                  <p>
                    <b>{item.title}:</b> ${item.price}
                  </p>
                  <p>
                    <b>Quantity:</b> {item.quantity}
                  </p>
                </div>
              ))}
              <p style={{ marginTop: 10, fontSize: 16 }}>
                <b>Total:</b> ${request.totalCost}
              </p>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default EditRequests;
