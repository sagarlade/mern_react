import React from "react";
import "./customize.css";
import { IoSettingsOutline } from "react-icons/io5";
import { SiApplemusic } from "react-icons/si";
import { MdInsertPhoto } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaCompass } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import Art from "../../assest/art.png";
import Typo from "../../assest/typo.png";
import Interface from "../../assest/inter.jpeg";
import Settings from "../../assest/setting.jpeg";
import Art_one from "../../assest/Artwork1.jpg";
import Art_two from "../../assest/Artwork2.jpg";
import Inter from "../../assest/Interface1.jpg";
import Inter_one from "../../assest/Interface2.jpg";

import Setting from "../../assest/Settings1.jpg";
import Setting_one from "../../assest/Settings2.jpg";

import Typography from "../../assest/Typography1.jpg";
import Typography_one from "../../assest/Typography2.jpg";

function Customize() {
  return (
    <>
      <div className="container section_cust">
        <div className="cust_hed">
          <p>CUSTOMIZATION</p>
          <h1>Countless ways to customize.</h1>
          <h3>
            Customization is at the core of the Sleeve experience — choose from
            any combination of design choices, behaviors and settings to make
            Sleeve at home on your desktop.
          </h3>
        </div>
        <div className="images_mac">
          <MdInsertPhoto className="mac_icon" />
          <FaFacebookMessenger className="mac_icon" />
          <IoSettingsOutline className="mac_icon" />
          <FaCompass className="mac_icon" />
          <RiNetflixFill className="mac_icon" />
          <SiApplemusic className="mac_icon" />
          <FaSpotify className="mac_icon" />
        </div>
        <div className="cust_bottom">
          <div className="work">
            <div className="art_left col-lg-5 col-sm-12">
              <img src={Art} alt="ArtWork" />
              <h1>Artwork</h1>
              <p>
                Scale artwork all the way up or all the way down. Round the{" "}
                <br />
                corners or leave them square. Choose shadow and lighting effects
                <br />
                to bring your album artwork to life. Or hide it completely.
              </p>
            </div>
            <div className="art_right col-lg-5 col-sm-12">
              <img src={Art_one} alt="artWork" />
              <img src={Art_two} alt="artWork" />
            </div>
          </div>
          <div className="work">
            <div className="art_left col-lg-5 col-sm-12">
              <img src={Typo} alt="Typog" />
              <h1>Typography</h1>
              <p>
                Pick the track info you want to display, and then exactly how to
                display it. <br />
                Choose the fonts, weights, sizes, and transparency to use for
                each line, along with customizing color and shadow.
              </p>
            </div>
            <div className="art_right col-lg-5 col-sm-12">
              <img src={Typography} alt="Typo" />
              <img src={Typography_one} alt="Typo" />
            </div>
          </div>
          <div className="work">
            <div className="art_left col-lg-5 col-sm-12">
              <img src={Interface} alt="Interface" />
              <h1>Interface</h1>
              <p>
                Customize the layout, alignment and position to fit your setup.
                Show and hide playback controls. Add a backdrop layer and
                customize it.
              </p>
            </div>
            <div className="art_right col-lg-5 col-sm-12">
              <img src={Inter} alt="aetWork" />
              <img src={Inter_one} alt="aetWork" />
            </div>
          </div>
          <div className="work">
            <div className="art_left col-lg-5 col-sm-12">
              <img src={Settings} alt="Settings" />
              <h1>Settings</h1>
              <p>
                Decide if Sleeve stays out of the way, behind windows, or in
                front of them — or only when you need to see it. Show it in the
                Dock, choose from custom icons, or keep it on the Desktop only.
                Set your custom keyboard shortcuts and integrate with the apps
                you use.
              </p>
            </div>
            <div className="art_right col-lg-5 col-sm-12">
              <img src={Setting} alt="aetWork" />
              <img src={Setting_one} alt="aetWork" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customize;
