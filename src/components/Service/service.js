import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./service.css";
import Fm from "../../assest/card_1.png";
import Spotify from "../../assest/card_2.png";
import Music from "../../assest/mus.png";
import Mac_Spotify from "../../assest/spo.png";
import Mac_Player from "../../assest/music_n.png";

function GridExample() {
  return (
    <>
      <div className="container box_sec">
        <div className="box_title">
          <p>INTEGRATIONS</p>
          <h1>Like, Scrobble.</h1>
        </div>
        <Row xs={1} md={2} className="g-4 box_cards">
          {Array.from({ length: 2 }).map((_, idx) => (
            <Col key={idx}>
              <Card
                className={`box ${idx === 0 ? "card-style-1" : "card-style-2"}`}
              >
                <Card.Img variant="top" src={idx === 0 ? Fm : Spotify} />
                <Card.Body>
                  <Card.Text className="Text">
                    {idx === 0
                      ? "Sleeve integrates with Last.fm so you never miss a track. Simply sign in and start scrobbling."
                      : "With Sleeve 2 you can now like tracks in Spotify, without ever having to switch away from Sleeve."}
                  </Card.Text>
                  <Card.Text className="card_text">
                    {idx === 0
                      ? "Last.fm account required"
                      : "A free Spotify Developer account is required"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="box_banner">
          <Row>
            <div className="col-lg-4 col-sm-12 box_img_img">
              <img src={Music} alt="Music" />
              <img src={Mac_Player} alt="Music" />
              <img src={Mac_Spotify} alt="Music" />
            </div>
            <div className="col-lg-8 col-sm-12 box_det">
              <h5>
                Sleeve integrates directly with Apple Music, Spotify and
                Doppler. Control playback, like tracks and adjust volume
                seamlessly.
              </h5>
            </div>
          </Row>
        </div>

      </div>
    </>
  );
}

export default GridExample;
