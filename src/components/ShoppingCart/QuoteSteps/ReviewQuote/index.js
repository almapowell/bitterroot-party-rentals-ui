import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../../redux/cartSlice";
import QuoteTable from "../../../../shared/QuoteTable";
import CustomerSummary from "../../../../shared/CustomerSummary";
import { notification } from "antd";
import { API } from "../../../../shared/utils";
import "./styles.css";

const ReviewQuote = ({ state }) => {
  const [savingQuote, setSavingQuote] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitReview = async (cartItems, state) => {
    setSavingQuote(true);
    const rentalRequest = {
      cartItems,
      customerInformation: state,
      status: "Pending",
    };

    await axios.post(API + "/api/request/create", rentalRequest).then(() => {
      navigate("/");
      successfulNotification();
      dispatch(clearCart());
    });

    const { first, last, email } = rentalRequest.customerInformation;
    const name = first + " " + last;

    await axios.post(API + "/api/email/request-form", {
      name,
      email,
      body: rentalRequest,
    });
  };

  const successfulNotification = () => {
    notification["success"]({
      message: "We've recieved your request",
      description: `We will get back to you as soon as possible. Thank you for booking with us.`,
    });
  };

  const fetchData = () => {
    setSavingQuote(true);
  };

  return (
    <>
      <h2>Quote Summary</h2>
      <QuoteTable cartItems={cartItems} />

      <h2>Customer Information</h2>
      <CustomerSummary info={state} />

      <div className="primary-button-wrapper">
        <div>
          <button
            onClick={() => submitReview(cartItems, state)}
            className={`button ${savingQuote && "button--loading"}`}
          >
            <span className="button__text">Submit Quote Request</span>
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
