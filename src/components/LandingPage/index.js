import React from "react";
import "./styles.css";
import { useNavigate } from "react-router";
import WhyChooseUs from "./WhyChooseUs";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="first-page">
        <img
          alt="Buffet Stands For Rent"
          src="https://cpartyrentals.com/wp-content/uploads/2021/11/ALI_6713.jpg"
        ></img>

        <div className="first-line">Welcome to</div>
        <div className="second-line">Bitterroot Party Rentals</div>
        <button onClick={() => navigate("/inventory")} className="shop-button">
          Shop Rentals
        </button>
      </div>
      <WhyChooseUs />

      <div className="reminder">Click SHOP RENTALS to get started today!</div>
    </div>
  );
};

export default LandingPage;
