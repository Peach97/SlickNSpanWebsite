import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
// import Contact from "./pages/contact";
// import Gallery from "./pages/gallery";
// import Services from "./pages/services";
import Form from "/Users/janelleghanem/react-website/src/pages/Form/Form.js";
import Cards from "/Users/janelleghanem/react-website/src/pages/Cards/Cards.js";
import List from "/Users/janelleghanem/react-website/src/pages/List/List.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" component={About} />
          <Route path="#contact" component={Form.js} />
          <Route path="#gallery" component={Cards} />
          <Route path="/services" component={List} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
