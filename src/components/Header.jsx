import React from "react";
import logo from "./Logo.png";
import reviews from "./reviews.jpg";
import "./custom.css";

function Header() {
  return (
    <div className="header-main">
      <div className="logo">
        <img src={logo} className="header-logo" alt="logo" />
      </div>
      <div className="reviews">
        <img src={reviews} className="header-reviews" alt="reviews" />
      </div>
    </div>
  );
}

export default Header;
