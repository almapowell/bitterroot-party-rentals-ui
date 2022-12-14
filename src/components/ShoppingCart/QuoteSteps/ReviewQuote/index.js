import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../../redux/cartSlice";
import { addRequest } from "../../../../redux/requestsSlice";
import QuoteTable from "../../../../shared/QuoteTable";
import CustomerSummary from "../../../../shared/CustomerSummary";
import { notification } from "antd";
import { API } from "../../../../shared/utils";

const ReviewQuote = ({ state }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitReview = async (cartItems, state) => {
    const rentalRequest = {
      cartItems,
      customerInformation: state,
      status: "Pending",
    };
    await axios.post(API + "/api/request/create", rentalRequest).then(() => {
      navigate("/");
      successfulNotification();
      dispatch(clearCart());
      dispatch(addRequest(rentalRequest));
    });
  };

  const successfulNotification = () => {
    notification["success"]({
      message: "Congradulations",
      description: `We've received your request. We will get back to you as soon as possible. Thank you for booking with us.`,
    });
  };

  return (
    <>
      <h2>Quote Summary</h2>
      <QuoteTable cartItems={cartItems} />

      <h2>Customer Information</h2>
      <CustomerSummary info={state} />

      <div className="primary-button-wrapper">
        <div
          style={{
            width: 300,
          }}
        >
          <button
            onClick={() => submitReview(cartItems, state)}
            className="primary-button"
          >
            Submit Quote Request
          </button>
        </div>
      </div>
      <p style={{ marginTop: 50, color: "grey", fontSize: 18 }}>
        <strong>Note: </strong>This is just a quote request, NOT a reservation.
        I will be reaching out shortly to confirm your request before before
        anything is submitted.
      </p>
    </>
  );
};

export default ReviewQuote;
