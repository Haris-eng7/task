import React from "react";
import "./custom.css";
import image from "./header-img.jpg";

function BannerSection() {
  return (
    <div class="banner-section">
      <img src={image} className="banner-image" alt="banner" />
      <div className="banner-pop">
        <span className="pop-text">
          gratis <br></br>
          <b>TRAPLIFT</b>
          <br></br>
          brochure<br></br>
          &#10097;&#10097;&#10097;&#10097;
        </span>
      </div>
    </div>
  );
}

export default BannerSection;
