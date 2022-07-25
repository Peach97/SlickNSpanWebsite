import React from "react";
import { Row, Button, Col } from "react-bootstrap";
import "./HeroSection.css";
import video from "../../videos/car-detail.mp4";

function smoothGallery() {
  document.querySelector("#gallery").scrollIntoView({
    behavior: "smooth",
  });
}
function smoothAbout() {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
}

function HeroSection(props) {
  return (
    <Row>
      <Col className="left-col">
        <video src={video} autoPlay loop muted />
      </Col>
      <Col className="header-col">
        <video src={video} autoPlay loop muted />
        <div className="hero-container" id="hero-container">
          <h1 id="hero-header"> Slick & Span </h1>
          <h2 id="hero-subheader">Bay Area | Premium Detailing</h2>
          <div className="hero-press">
            <Row className="m-3">
              <Col>
                <Button
                  variant="light"
                  id="hero-btn-left"
                  onClick={() => smoothAbout()}
                >
                  Schedule Now
                </Button>
              </Col>
              <Col>
                <Button
                  variant="light"
                  id="hero-btn-right"
                  onClick={() => smoothGallery()}
                >
                  Gallery
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default HeroSection;
