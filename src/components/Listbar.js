import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Listbar.css";

function Listbar() {
  const [click, setClick] = useState(false);
  const [sutton, setSutton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
              <Link to="/" className="list-links" onClick={closeMobileMenu}>
                Standard Full
              </Link>
            </li>
            {/* Services */}
            <li className="list-item">
              <Link to="/" className="list-links" onClick={closeMobileMenu}>
                Premium Full
              </Link>
            </li>
            {/* Contact Us */}
            <li className="list-item">
              <Link to="/" className="list-links" onClick={closeMobileMenu}>
                Interior
              </Link>
            </li>
            {/* Gallery */}
            <li className="list-item">
              <Link to="/" className="list-links" onClick={closeMobileMenu}>
                Exterior
              </Link>
            </li>
          </ul>
          {/* double & returns whatever is after it */}
          {/* {button && <Button buttonStyle='btn--outline'>Schedule Now!</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Listbar;
