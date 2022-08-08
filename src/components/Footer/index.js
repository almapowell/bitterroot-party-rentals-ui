import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import React from "react";
import "./styles.css";
export default function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="footerContainer">
      <div className="social-media-container">
        <FacebookFilled
          onClick={() =>
            openInNewTab("https://www.facebook.com/sunnysideeventsmt")
          }
        />
        <InstagramFilled
          onClick={() =>
            openInNewTab("https://www.instagram.com/sunnysideeventsmt/")
          }
        />
      </div>
      <div
        style={{ border: "1px solid #faf9fa", width: "100%", margin: "15px 0" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          color: "#faf9fa",
          fontSize: 12,
        }}
      >
        Copyright &#169; 2022 Bitterroot Party Rentals
      </div>
    </div>
  );
}
