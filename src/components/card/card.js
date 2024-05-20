import React from "react";
import "./card.css";
import Music_p from "../../assest/music_p1.png";
import Music_MacBook from "../../assest/shar.webp";
import Banner from "../banner/banner";

// const Card = ({ imageSrc, title, content }) => {
//   return (
//     <div className="card">
//       <div className="image">
//         <img src={imageSrc} alt={title} />
//       </div>
//       <div className="content">
//         <h3>{title}</h3>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// };

// function Design() {
//   const cards = [
//     {
//       imageSrc: require("../../assest/music_p1.png"),
//       title: "Change it up",
//       content:
//         "Switch between themes with just a click. Modify the built-in themes or create your own using Sleeve’s extensive preferences.",
//     },
//     {
//       imageSrc: require("../../assest/shar.webp"),
//       title: "Shareable",
//       content:
//         "Export your themes and share them with friends using the handy new Sleeve Theme file format. Install themes from anywhere with a double-click or a drag and drop.",
//     },
//   ];

//   return (
//     <div>
//       <div className="banner_sec">
//         <Banner />
//       </div>
//       <div className="container cards mt-5">
//         {cards.map((card, index) => (
//           <Card key={index} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Design;

function card() {
  return (
    <>
      <div className="banner_sec">
        <Banner />
      </div>
      <div className="container py-5">
        <div className="row pb-5 mb-4">
          <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
            <div className="card shadow-sm border-0 card_card">
              <div className="card-body">
                <img
                  src={Music_p}
                  alt="Music"
                  className="img-fluid d-block mx-auto mb-3"
                />
                <h5>Change it up</h5>
                <p className="small text-muted font-italic">
                  Switch between themes with just a click. Modify the built-in
                  themes or create your own using Sleeve’s extensive
                  preferences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
            <div className="card shadow-sm border-0 card_card">
              <div className="card-body p-4">
                <img
                  src={Music_MacBook}
                  alt="Music"
                  className="img-fluid d-block mx-auto mb-3"
                />
                <h5>Shareable</h5>
                <p className="small text-muted font-italic">
                  Export your themes and share them with friends using the handy
                  new Sleeve Theme file format. Install themes from anywhere
                  with a double-click or a drag and drop.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
