import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footerContainer">
      <div className="social-media-container">
        <FacebookFilled />
        <InstagramFilled />
      </div>
      <div
        style={{ border: "1px solid #faf9fa", width: "100%", marginTop: 30 }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: 30,
          color: "#faf9fa",
          fontSize: 12,
        }}
      >
        Copyright &#169; 2022 Bitterroot Party Rentals
      </div>
    </div>
  );
}
