import React, { useState } from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const location = useLocation();
  const windowWidth = window.innerWidth;
  const shoppingCart = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z" />
    </svg>
  );

  const [activeLink, setActiveLink] = useState(location.pathname);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

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

  const handleCloseNavMenu = () => {
    return active === "nav__menu nav__active" && setActive("nav__menu");
  };

  window.addEventListener("scroll", handleCloseNavMenu);

  const showCartOnLargeScreens = (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div
        onClick={() => handleNavClick("/shopping-cart")}
        className={`shopping-cart ${
          activeLink === "/shopping-cart" && "activeLink"
        }`}
      >
        <Badge dot={cart.cartItems.length > 0}>
          <Link to="/shopping-cart">{shoppingCart}</Link>
        </Badge>
      </div>
    </div>
  );

  const showCartOnSmallScreens = (
    <li
      onClick={() => handleNavClick("/shopping-cart")}
      className={`nav__item ${activeLink === "/shopping-cart" && "activeLink"}`}
    >
      <Link to="/shopping-cart">{shoppingCart}</Link>
    </li>
  );

  return (
    <div>
      <nav className="nav">
        <Link className="logo" to="/">
          Bitterroot Party Rentals
        </Link>
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
          <li
            onClick={() => handleNavClick("/gallery")}
            className={`nav__item ${activeLink === "/gallery" && "activeLink"}`}
          >
            <Link to="/gallery" className="nav__link">
              Gallery
            </Link>
          </li>
          {windowWidth < 768 && showCartOnSmallScreens}
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        {windowWidth > 768 && showCartOnLargeScreens}
      </nav>
    </div>
  );
}

export default Navbar;
