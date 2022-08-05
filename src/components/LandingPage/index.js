import React from "react";
import RentalForm from "./RentalForm";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { Image } from "antd";
import "./styles.css";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="background">
        <img
          src={
            "https://cpartyrentals.com/wp-content/uploads/2021/11/ALI_6713.jpg"
          }
          alt="backgroundImg"
        />
        <div class="overlay">
          <span className="welcome">Welcome to</span>
          <span className="company-name">Bitterroot Party Rentals</span>
          <div class="shop-btn-wrapper">
            <button
              onClick={() => navigate("/categories")}
              className="shop-btn"
            >
              Shop Rentals
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className="banner">
        <span>Free Quotes</span>
        <span>Setup & Takedown</span>
        <span>Fast Reply</span>
      </div>

      {/* <ImageList
        sx={{ width: "100%", height: "auto" }}
        variant="masonry"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <Image
              src={`${item.img}?w=161&fit=crop&auto=format`}
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
    </div>
  );
};

export default LandingPage;
