import React from "react";
import "../App.css";
import "./home.css";
import HeroSection from "./HeroSection/HeroSection";
import Listbar from "../components/ListBar/Listbar.js";
import AboutUs from "./AboutUs/AboutUs";
import Special from "./Special/Special";
import Footer from "../components/Footer/Footer";
import Gallery from "./Gallery/Gallery";

function Home() {
  return (
    <>
      <HeroSection />
      <Listbar />
      <Special />
      <Gallery />
      <AboutUs />
      <Footer />
    </>
  );
}
export default Home;
