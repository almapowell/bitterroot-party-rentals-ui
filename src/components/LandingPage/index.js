import React from "react";
import "./styles.css";
import { useNavigate } from "react-router";
import Testimonials from "./Testimonals";
import ContactForm from "./ContactForm";

const itemsImages = [
  "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5348.JPG",
  "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5362.JPG",
  "https://bitterroot-party-rentals.s3.amazonaws.com/DSC00136.JPG",
];
const mainPhoto =
  "https://bitterroot-party-rentals.s3.amazonaws.com/IMG_5354.JPG";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="top-content">
        <h3 className="main-title">Bitterroot Party Rentals</h3>
        <span className="lp-sub-text">Weddings, Birthdays, and Events</span>
        <button onClick={() => navigate("/inventory")} className="shop-button">
          Shop Rentals
        </button>
        <img
          className="main-photo"
          alt="Buffet Stands For Rent"
          src={mainPhoto}
        />

        <span className="description">
          <p>
            We offer tents, tables, chairs, and outdoor party games for any
            occasion. Locally owned and operated, we offer exceptional service
            and have a proven track record of success. Whether you are planning
            a wedding, birthdays, or company events, we can help.
          </p>
          <p>
            Click <a href="/inventory">Shop Rentals</a> to get started.
          </p>
          <p
            onClick={() => window.location.replace("/#contact")}
            className="email-us"
          >
            Give us a call or email today.
          </p>
        </span>
      </div>

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

      <Testimonials />

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default LandingPage;
