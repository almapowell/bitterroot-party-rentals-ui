import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <div className="header-container">
        <Link to="/">
          <span className="logo">Bitterroot Party Rentals</span>
        </Link>
        <div>
          <button
            className="contactBtn"
            onClick={() => setIsModalVisible(true)}
          >
            Contact Us
          </button>
          <Link
            to="/shopping-cart"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ShoppingCartOutlined className="shoppingCart" />
          </Link>
        </div>
      </div>

      <ContactModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </div>
  );
};

export default Header;
