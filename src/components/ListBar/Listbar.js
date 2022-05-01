import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Listbar.css";
import { ServicesContent } from "/Users/janelleghanem/react-website/src/components/Test/Test.jsx";
import { ServicesContent2 } from "/Users/janelleghanem/react-website/src/components/Test/Test.jsx";
import { ServicesContent3 } from "/Users/janelleghanem/react-website/src/components/Test/Test.jsx";
import { ServicesContent4 } from "/Users/janelleghanem/react-website/src/components/Test/Test.jsx";
import { Sutton } from "/Users/janelleghanem/react-website/src/components/Sutton/Sutton.js";
import "/Users/janelleghanem/react-website/src/components/Sutton/Sutton.css";

function Listbar() {
  const [isToggled, setIsToggled] = useState(true);
  const [isToggled2, setIsToggled2] = useState(false);
  const [isToggled3, setIsToggled3] = useState(false);
  const [isToggled4, setIsToggled4] = useState(false);

  const [click, setClick] = useState(false);
  const [setSutton] = useState(true);

  const handleClick = () => setClick(!click);

  const showSutton = () => {
    if (window.innerWidth <= 960) {
      setSutton(false);
    } else {
      setSutton(true);
    }
  };

  window.addEventListener("resize", showSutton);

  return (
    <>
      <nav className="listbar">
        <div className="listbar-container">
          <div id="logo-header-combo">
            <Link to="/" className="listbar-logo">
              <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "list-menu active" : "list-menu"}>
            {/* About */}
            <li className="list-item">
              <Link
                to="/"
                className="list-links"
                onClick={() => {
                  setIsToggled(true);
                  setIsToggled2(false);
                  setIsToggled3(false);
                  setIsToggled4(false);
                }}
              >
                Standard Package
              </Link>
              {isToggled && <ServicesContent />}
            </li>
            {/* Services */}
            <li className="list-item">
              <Link
                to="/"
                className="list-links"
                onClick={() => {
                  setIsToggled(false);
                  setIsToggled2(true);
                  setIsToggled3(false);
                  setIsToggled4(false);
                }}
              >
                Premium Package
              </Link>
              {isToggled2 && <ServicesContent2 />}
            </li>
            {/* Contact Us */}
            <li className="list-item">
              <Link
                to="/"
                className="list-links"
                onClick={() => {
                  setIsToggled(false);
                  setIsToggled2(false);
                  setIsToggled3(true);
                  setIsToggled4(false);
                }}
              >
                Interior
              </Link>
              {isToggled3 && <ServicesContent3 />}
            </li>
            {/* Gallery */}
            <li className="list-item">
              <Link
                to="/"
                className="list-links"
                onClick={() => {
                  setIsToggled(false);
                  setIsToggled2(false);
                  setIsToggled3(false);
                  setIsToggled4(true);
                }}
              >
                Exterior
              </Link>
              {isToggled4 && <ServicesContent4 />}
            </li>
          </ul>
          {/* double & returns whatever is after it */}
          {/* {button && <Button buttonStyle='btn--outline'>Schedule Now!</Button>} */}
        </div>
        <Sutton> Schedule Now!</Sutton>
      </nav>
    </>
  );
}

export default Listbar;
