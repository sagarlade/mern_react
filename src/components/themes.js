import React, { useState, useEffect } from "react";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { ImAppleinc } from "react-icons/im";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./theme.css";
import Play_Icon from "../assest/ShelfCallout@2x.png";
import Card from "./card/card";
import Customize from "./customize/customize";
import GroupCards from "./Service/service";

function Themes() {
  const [paymentPage, setPaymentPage] = useState(false);

  const handleBuyDirectlyClick = () => {};

  useEffect(() => {
    if (paymentPage) {
      window.location.href = "../Payment";
    }
  }, [paymentPage]);
  return (
    <div className="container">
      <div className="header section_1">
        <h1 className="heading_sle">Sleeve 2</h1>
        <h3 className="sub_heading">
          The ultimate music accessory for your Mac.
        </h3>
        <p>
          Sleeve sits on the desktop, displaying and controlling the music
          you’re currently playing in <SiApplemusic className="icons" /> Apple
          Music, <FaSpotify className="icons" /> Spotify, and{" "}
          <FaMusic className="icons" /> Doppler.
        </p>
        <div className="btn_app">
          <Button type="button" className="btn_1">
            <ImAppleinc className="icons_1" /> Mac App Store
          </Button>
          <Button
            type="submit"
            className="btn_2"
            onClick={() => {
              handleBuyDirectlyClick();
              setPaymentPage(true);
            }}
          >
            {" "}
            Buy Directly <span>$ 5.99</span>
          </Button>
        </div>
        <div className="det_p">
          <p className="p_til">
            No subscriptions. No in-app purchases. Requires macOS 11 Big Sur or
            later.
          </p>
        </div>
        <div className="arr_btn">
          <Button className="btn_new">
            {" "}
            <img src={Play_Icon} alt="icons" />
            Now with <span>shelves and a progress bar.</span> See what's new in
            Sleeve 2.3 <FaRegArrowAltCircleRight className="arrow" />
          </Button>
        </div>
      </div>
      <div className="mt-5 align-center banner_part">
        <Card />
      </div>
      <div className="customize_sec mt-5">
        <Customize />
      </div>
      <div className="customize_sec mt-5">
        <GroupCards />
      </div>
    </div>
  );
}

export default Themes;
