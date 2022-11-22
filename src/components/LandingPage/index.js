import React, { useRef, useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Image } from "antd";
import "./styles.css";
import { useNavigate } from "react-router";
import WhyChooseUs from "./WhyChooseUs";

const LandingPage = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const [cols, setCols] = useState(0);

  useEffect(() => {
    setCols(window.innerWidth < 786 ? 1 : 3);
  }, [imageRef]);

  return (
    <div>
      <div className="first-page">
        <img
          alt="Buffet Stands For Rent"
          src="https://cpartyrentals.com/wp-content/uploads/2021/11/ALI_6713.jpg"
        ></img>

        <div class="first-line">Welcome to</div>
        <div class="second-line">Bitterroot Party Rentals</div>
        <button onClick={() => navigate("/inventory")} className="shop-button">
          Shop Rentals
        </button>
      </div>
      <WhyChooseUs />

      <ImageList
        sx={{ width: "100%", height: "auto", padding: "0 21px" }}
        variant="masonry"
        cols={cols}
        gap={20}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={item.img}>
            <Image
              className="img"
              rootClassName="masonry-image"
              src={`${item.img}`}
              // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
              alt={"Image" + index}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <div className="reminder">Click SHOP RENTALS to get started today!</div>
    </div>
  );
};

export default LandingPage;

const itemData = [
  {
    img: "https://drive.google.com/uc?export=view&id=1S84VOzz3trPFshR7XFoS7QUO1TJ-yC0E",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1cGTQBrLr4Aneh8CW4SE6g9WGoMZuvM5V",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1aDKA5QoRBTHmOu5hgswcagDQ0iePKRNY",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1viglfl2V1XKthyRFaFQhPahNExwUd-RX",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1ck-euKuuFTgAL_RGY3x_zujBkKO3KPKN",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=1HisUWEJ2MQTl_YJCYQnBMwv5DD2qLicJ",
  },
  {
    img: "https://drive.google.com/uc?export=view&id=17pf47SRWozmjLdN2Jl0KnMDwWXLHGqJo",
  },
];

{
  /* <div className="shop-btn-wrapper">
  <button onClick={() => navigate("/inventory")} className="shop-btn">
    Shop Rentals
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>; */
}
