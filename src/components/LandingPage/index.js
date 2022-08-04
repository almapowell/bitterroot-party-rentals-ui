import React from "react";
import RentalForm from "./RentalForm";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageOne from "../../shared/images/image1.jpg";
import ImageTwo from "../../shared/images/image2.JPG";
import ImageThree from "../../shared/images/image3.JPG";
import ImageFour from "../../shared/images/image4.JPG";
import ImageFive from "../../shared/images/image5.JPG";
import ImageSix from "../../shared/images/image6.JPG";
import ImageSeven from "../../shared/images/image7.JPG";
import ImageEight from "../../shared/images/image8.PNG";
import ImageNine from "../../shared/images/image9.PNG";
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

      <ImageList
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
      </ImageList>
    </div>
  );
};

export default LandingPage;

const itemData = [
  {
    img: ImageOne,
    title: "Bed",
  },
  {
    img: ImageTwo,
    title: "Kitchen",
  },
  {
    img: ImageThree,
    title: "Sink",
  },
  {
    img: ImageFour,
    title: "Books",
  },
  {
    img: ImageFive,
    title: "Chairs",
  },
  {
    img: ImageSix,
    title: "Candle",
  },
  {
    img: ImageSeven,
    title: "Laptop",
  },
  {
    img: ImageEight,
    title: "Doors",
  },
  {
    img: ImageNine,
    title: "Coffee",
  },
];
