import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
// import Contact from "./pages/contact";
// import Gallery from "./pages/gallery";
// import Services from "./pages/services";
import Form from "./components/Form";
import Cards from "./components/Cards";
import List from "./components/List";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Form} />
          <Route path="/gallery" component={Cards} />
          <Route path="/services" component={List} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
