import React from "react";
import "./../App.css";
import Cards from "/Users/janelleghanem/react-website/src/pages/Cards/Cards.js";
import HeroSection from "/Users/janelleghanem/react-website/src/pages/HeroSection/HeroSection.js";
// import Form from "/Users/janelleghanem/react-website/src/pages/Form/Form.js";
import Listbar from "/Users/janelleghanem/react-website/src/components/ListBar/Listbar.js";
// import List from "/Users/janelleghanem/react-website/src/pages/List/List.js";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Listbar />
      <Footer />
    </>
  );
}
export default Home;
