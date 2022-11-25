import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import React, { useState } from "react";
import ContactModal from "../Header/ContactModal";
import "./styles.css";
export default function Footer() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="footerContainer">
      <div className='footerContent'>
        <section className="footerSection socialIcons">
          <FacebookFilled
            style={{fontSize: 25}}
            onClick={() =>
              openInNewTab("https://www.facebook.com/sunnysideeventsmt")
            }
          />
          <InstagramFilled
            style={{fontSize: 25}}
            onClick={() =>
              openInNewTab("https://www.instagram.com/sunnysideeventsmt/")
            }
          />
        </section>

         <section className="footerSection links">
          <h5 style={{color: 'white', fontWeight: 'bold', margin: 0}}>Help</h5>
          <a href="/faq">FAQ</a>
          <a onClick={() => setIsModalVisible(true)} >Contact Us</a>
        </section>
      </div>
  
      <div>
        <section
          className="footerSection"
          style={{fontSize: 13}}
          >
          Copyright &#169; 2022 Bitterroot Party Rentals
        </section>
      </div>
      <ContactModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </div>
  );
}
