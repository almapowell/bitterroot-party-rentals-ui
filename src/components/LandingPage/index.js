import React, { useRef, useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { Image } from "antd";
import "./styles.css";
import { useNavigate } from "react-router";
import img1 from "../../shared/images/landing-page.jpg";
import img2 from "../../shared/images/imageTwo.jpg";
import img3 from "../../shared/images/imageThree.jpg";
import img4 from "../../shared/images/imageFour.jpg";
import img5 from "../../shared/images/imageFive.jpg";
import img6 from "../../shared/images/imageSix.jpg";

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
          <div className="shop-btn-wrapper">
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
        {itemData.map((item, index) => (
          <ImageListItem key={item.img}>
            <Image
              rootClassName="masonry-image"
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
              alt={"Image" + index}
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
    img: img1,
    title: "",
  },
  {
    img: img2,
    title: "",
  },
  {
    img: img3,
    title: "",
  },
  {
    img: img4,
    title: "",
  },
  {
    img: img5,
    title: "",
  },
  {
    img: img6,
    title: "",
  },
  // {
  //   img: img7,
  //   title: "Laptop",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
  //   title: "Doors",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
  //   title: "Coffee",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
  //   title: "Storage",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
  //   title: "Candle",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  //   title: "Coffee table",
  // },
];
