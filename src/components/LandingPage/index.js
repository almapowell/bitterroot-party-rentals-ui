import React from "react";
import Testimonials from "./Testimonals";
import ContactForm from "./ContactForm";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import "./styles.css";

const itemsImages = [
  "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5348.JPG",
  "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5369.PNG",
  "https://bitterroot-party-rentals.s3.amazonaws.com/DSC00136.JPG",
];

const LandingPage = () => {
  const navigate = useNavigate();

  const heroClassName =
    window.innerWidth < 700 ? "vertical-image" : "horizontal-image";

  return (
    <div>
      <div className={heroClassName}>
        <div className="top-content">
          <div className="main-title">Elevate your event with our rentals</div>
          <p className="description">
            Bitterroot Party Rentals offers tents, tables, chairs, and outdoor
            party games for any occasion. Whether you are planning a wedding,
            birthday, or company events, we can help.
          </p>
          <Button
            style={{
              padding: "10px 30px",
              fontSize: "16px",
              textTransform: "none",
              maxWidth: 200,
            }}
            className="shop-rentals-btn"
            onClick={() => navigate("/inventory")}
            variant="contained"
          >
            Shop Rentals
          </Button>
        </div>
      </div>

      <section
        style={{
          background: "#343434",
          margin: "8vh 0px",
          height: "5vh",
        }}
      ></section>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 50,
        }}
      >
        {itemsImages.map((image, index) => {
          return (
            <img
              key={index}
              alt={"Events Photo " + index}
              className="landing-page-img"
              src={image}
            />
          );
        })}
      </div>

      <section
        style={{
          background: "#343434",
          margin: "8vh 0px",
          height: "5vh",
        }}
      ></section>

      <Testimonials />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default LandingPage;
