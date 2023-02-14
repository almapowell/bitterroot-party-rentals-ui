import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="footerContainer">
      <div className="footerContent">
        <section className="footerSection socialIcons">
          <FacebookFilled
            style={{ fontSize: 25 }}
            onClick={() =>
              openInNewTab("https://www.facebook.com/sunnysideeventsmt")
            }
          />
          <InstagramFilled
            style={{ fontSize: 25 }}
            onClick={() =>
              openInNewTab("https://www.instagram.com/sunnysideeventsmt/")
            }
          />
        </section>

        <section className="footerSection links">
          <h5 style={{ color: "white", fontWeight: "bold", margin: 0 }}>
            Help
          </h5>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/review">Leave a Review</Link>
        </section>
      </div>

      <div>
        <section className="footerSection" style={{ fontSize: 13 }}>
          Copyright &#169; 2023 Bitterroot Party Rentals
        </section>
      </div>
    </div>
  );
}
