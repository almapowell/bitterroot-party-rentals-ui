import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../../redux/cartSlice";
import { addRequest } from "../../../../redux/requestsSlice";
import QuoteTable from "../../../../shared/QuoteTable";
import CustomerSummary from "../../../../shared/CustomerSummary";

const ReviewQuote = ({ state }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitReview = (cartItems, state) => {
    const rentalRequest = {
      cartItems,
      customerInformation: state,
      status: "Pending",
    };
    toast.success(
      "Thank you for your request! We will reach out to you shortly with a response."
    );
    navigate("/");

    dispatch(clearCart());
    dispatch(addRequest(rentalRequest));
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
      <ToastContainer />
    </>
  );
};

export default ReviewQuote;
