import React from "react";
import SlickNavbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <SlickNavbar />
        <Home />
      </Router>
    </>
  );
}
export default App;
