import React from "react";
import BannerImg from "../../assest/banner.png";
import "./banner.css";

function banner() {
  return (
    <>
      <div className="container section_banner">
        <div className="banner_hed">
          <p>new in <span>2.0</span></p>
          <h1>Themes. Unlimited themes.</h1>
          <h3>
            Themes in Sleeve make creating and switching between customizations
            easy. Share your own creations with friends and install as many
            themes as you like with just a double-click.
          </h3>
        </div>
        <div className="banner_section">
          <img src={BannerImg} alt="banner" />
        </div>
      </div>
    </>
  );
}

export default banner;
