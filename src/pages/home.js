import React from "react";
import "./../App.css";
import Cards from "../components/Cards";
import HeroSection from "/Users/janelleghanem/react-website/src/components/HeroSection.js";
import Form from "../components/Form";
import Listbar from "../components/Listbar";
import List from "../components/List";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Listbar />
      <List />
      <Form />
    </>
  );
}
export default Home;
