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
              className="img"
              rootClassName="masonry-image"
              src={`${item.img}`}
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
              alt={"Image" + index}
              // loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* <ImageList
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
      </ImageList> */}
    </div>
  );
};

export default LandingPage;

const itemData = [
  {
    img:
      "https://drive.google.com/uc?export=view&id=1S84VOzz3trPFshR7XFoS7QUO1TJ-yC0E",
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1cGTQBrLr4Aneh8CW4SE6g9WGoMZuvM5V",
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1aDKA5QoRBTHmOu5hgswcagDQ0iePKRNY",
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1viglfl2V1XKthyRFaFQhPahNExwUd-RX",
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1ck-euKuuFTgAL_RGY3x_zujBkKO3KPKN",
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=1HisUWEJ2MQTl_YJCYQnBMwv5DD2qLicJ",
  },
  {
    img:
      "https://drive.google.com/uc?export=view&id=17pf47SRWozmjLdN2Jl0KnMDwWXLHGqJo",
  },
];
