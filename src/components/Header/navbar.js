import React, { useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ContactModal from "./ContactModal";

function Navbar() {
  const location = useLocation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const handleNavClick = (path) => {
    setActiveLink(path);
    setActive("nav__menu");
    setIcon("nav__toggler");
  };

  return (
    <div>
      <nav className="nav">
        <Link to="/">Bitterroot Party Rentals</Link>
        <ul className={active}>
          <li
            onClick={() => handleNavClick("/")}
            className={`nav__item ${activeLink === "/" && "activeLink"}`}
          >
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>

          <li
            onClick={() => handleNavClick("/inventory")}
            className={`nav__item ${
              activeLink === "/inventory" && "activeLink"
            }`}
          >
            <Link to="/inventory" className="nav__link">
              Inventory
            </Link>
          </li>

          {/* <li className="nav__item">
            <Link to="/portfolio" className="nav__link">
              Portfolio
            </Link>
          </li> */}

          <li className="nav__item">
            <a onClick={() => setIsModalVisible(true)} className="nav__link">
              Contact Us
            </a>
          </li>
          <li
            onClick={() => handleNavClick("/shopping-cart")}
            className={`nav__item ${
              activeLink === "/shopping-cart" && "activeLink"
            }`}
          >
            <Link to="/shopping-cart">
              <ShoppingCartOutlined className="shoppingCart" />
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <ContactModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </div>
  );
}

export default Navbar;
