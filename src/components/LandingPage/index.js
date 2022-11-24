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

        <div className="first-line">Welcome to</div>
        <div className="second-line">Bitterroot Party Rentals</div>
        <button onClick={() => navigate("/inventory")} className="shop-button">
          Shop Rentals
        </button>
      </div>
      <WhyChooseUs />

      {/* <ImageList
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
      </ImageList> */}

      <div className="reminder">Click SHOP RENTALS to get started today!</div>
    </div>
  );
};

export default LandingPage;
