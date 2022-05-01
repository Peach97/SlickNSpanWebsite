import React from "react";
import "./Cards.css";
import CardItem from "/Users/janelleghanem/react-website/src/components/CardItem/CardItem.js";
import { Zoom } from "react-reveal";

function Cards() {
  return (
    <div id="gallery">
      <div className="cards">
        <Zoom left>
          <h1>Let our work speak for itself!</h1>
        </Zoom>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="/"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/about"
              />
              <CardItem
                src="/"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/contact"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="/"
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/gallery"
              />
              <CardItem
                src="/"
                text="Experience Football on Top of the Himilayan Mountains"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="/"
                text="Ride through the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/home"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;