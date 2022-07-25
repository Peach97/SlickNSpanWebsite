import "./Navbar.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import image6 from "../../images/Group 2.png";

function smoothScroll() {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
    offsetTop: "120px",
  });
}
function smoothHome() {
  document.querySelector("#hero-container").scrollIntoView({
    behavior: "smooth",
  });
}

function SlickNavbar() {
  return (
    <Container fluid>
      <Navbar
        variant="dark"
        expand="lg"
        id="nav-bar"
        className="custom"
        style={{ fontSize: "16px" }}
        fixed="top"
      >
        <Navbar.Brand href="#home" style={{ paddingLeft: "2.5rem" }}>
          <img src={image6} alt="Cannot be viewed at this time" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ margin: "0 1rem 0 auto" }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" activeKey="1">
            <Nav.Link className="nav-home" style={{ paddingRight: "2.5rem" }}>
              carloscolon@spicknspan.com | (813) 403 - 8713
            </Nav.Link>
            <Nav.Link
              eventKey="1"
              className="nav-home"
              onClick={() => smoothHome()}
            >
              Home
            </Nav.Link>
            <Nav.Link className="nav-home" onClick={() => smoothHome()}>
              Review
            </Nav.Link>
            <Nav.Link className="nav-home" onClick={() => smoothScroll()}>
              Contact
            </Nav.Link>
            <NavDropdown
              className="nav-home"
              title="Socials"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                href="https://www.facebook.com/Spicknspan-Detailing-105449615261940"
                target="_blank"
              >
                Facebook <i class="fab fa-facebook-f" />
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com/spicknspandetailing/"
                target="_blank"
              >
                Instagram <i class="fab fa-instagram" />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" target="_blank">
                YouTube <i class="fab fa-youtube" />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default SlickNavbar;
