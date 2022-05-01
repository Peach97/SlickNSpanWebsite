import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div id="logo-header-combo">
            <Link to="/" className="navbar-logo">
              <section class="social-media">
                <div class="social-media-wrap">
                  <div class="footer-logo">
                    <Link to="/" className="social-logo">
                      {/* SlickNSpan */}
                      <i class="fab fa-typo3" />
                    </Link>
                  </div>

                  <div class="social-icons">
                    <Link
                      class="social-icon-link facebook"
                      to="/"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <i class="fab fa-facebook-f" />
                    </Link>
                    <Link
                      class="social-icon-link instagram"
                      to="/"
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i class="fab fa-instagram" />
                    </Link>
                    <Link
                      class="social-icon-link youtube"
                      to="/"
                      target="_blank"
                      aria-label="Youtube"
                    >
                      <i class="fab fa-youtube" />
                    </Link>
                    <Link
                      class="social-icon-link twitter"
                      to="/"
                      target="_blank"
                      aria-label="Twitter"
                    >
                      <i class="fab fa-twitter" />
                    </Link>
                    <Link
                      class="social-icon-link twitter"
                      to="/"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i class="fab fa-linkedin" />
                    </Link>
                  </div>
                </div>
              </section>
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* About */}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            {/* Services */}
            <li className="nav-item">
              <Link
                activeclass="active"
                to="#list"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            {/* Contact Us */}
            <li className="nav-item">
              <a href="#form" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
            {/* Gallery */}
            <li className="nav-item">
              <a
                href="#gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </a>
            </li>
          </ul>
          {/* double & returns whatever is after it */}
          {/* {button && <Button buttonStyle='btn--outline'>Schedule Now!</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
