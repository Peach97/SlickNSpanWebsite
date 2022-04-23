import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/" autoPlay loop muted />
      <h1>SLICK N' SPAN</h1>
      <p>THIS IS A SUBTEXT TEST</p>
      <div className="hero-btns">
        <a href="https://www.youtube.com/watch?v=rhvF2_JkDhQ">
        <Button
          className="btns-mobile"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        </a>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          MEET THE SLICK CREW <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
