import React, { useRef, useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { Image } from "antd";
import "./styles.css";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const [backgroundHeight, setBackgroundHeight] = useState(0);

  useEffect(() => {
    setBackgroundHeight(imageRef.current.offsetWidth * 0.6);
  }, [imageRef]);

  return (
    <div>
      <div
        style={{ height: backgroundHeight }}
        className="background"
        ref={imageRef}
      >
        <div className="overlay">
          <span className="welcome">Welcome to</span>
          <span className="company-name">Bitterroot Party Rentals</span>
          <div class="shop-btn-wrapper">
            <button onClick={() => navigate("/inventory")} className="shop-btn">
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
        <span>Delivery Service</span>
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
              rootClassName="masonry-image"
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
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
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
