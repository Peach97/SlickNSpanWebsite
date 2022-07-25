import React from "react";
import { Nav, Tab, Row, Col, Button } from "react-bootstrap";
import "../../components/ListBar/Listbar.css";
import "./Packages.css";
import image from "../../images/blue-car.png";
import image2 from "../../images/white-car-interior.png";
import image3 from "../../images/white-car-exterior.png";

import image5 from "../../images/Group 2.png";
import { Fade } from "react-reveal";
function smoothScroll() {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
    offsetTop: "120px",
  });
}

function Packages() {
  return (
    <>
      <div className="packages-container" id="package-container">
        <Tab.Container
          fluid
          id="packages-container"
          defaultActiveKey="standard"
        >
          <Nav flex className="justify-content-center">
            <Nav.Item className="packages-tab-wrap">
              <Nav.Link className="packages-link" eventKey="standard">
                Full Detail
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="packages-tab-wrap">
              <Nav.Link className="packages-link" eventKey="premium">
                Interior
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="packages-tab-wrap">
              <Nav.Link className="packages-link" eventKey="exterior">
                Exterior{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="packages-tab-wrap">
              <Nav.Link className="packages-link" eventKey="interior">
                Full Extraction
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Row>
            <Col>
              <img
                className="packages-logo"
                src={image5}
                style={{ marginLeft: "3rem" }}
                alt="Cannot be Viewed at This Time"
              />
            </Col>
          </Row>

          <Row
            className="justify-content-md-center "
            style={{ height: "30rem" }}
          >
            <Col className="sideways-text-col-md">
              <div className="sideways-text">
                <p className="rotated-text">
                  Available Now <i class="fas fa-stream" />
                </p>
              </div>
            </Col>
            <Col className="tab-content-col">
              <Tab.Content className="package-header-content">
                <Tab.Pane eventKey="standard">
                  <Fade bottom delay={1000} duration={1500}>
                    <h2 className="package-sub">Starts at $150</h2>
                  </Fade>
                  <Fade>
                    <h1 className="package-head">Full Detail</h1>
                  </Fade>
                  <Fade top delay={1000} duration={1500}>
                    <p>
                      <ul className="package-list">
                        <li>Full Interior</li>
                        <li>Full Exterior</li>
                        <li>Full Extraction</li>
                        <li>VPR Trim Shine and Protection</li>
                        <li>Wax</li>
                        <li>Soap</li>
                        <li>Pressure Wash</li>
                      </ul>
                    </p>
                  </Fade>
                </Tab.Pane>
                <Tab.Pane eventKey="premium">
                  <Fade bottom delay={1000} duration={1500}>
                    <h2 className="package-sub">Starts at $75</h2>
                  </Fade>
                  <Fade>
                    <h1 className="package-head">Interior</h1>
                  </Fade>
                  <Fade top delay={1000} duration={1500}>
                    <p>
                      <ul className="package-list">
                        <li>Steam Clean</li>
                        <li>Interior Vacuuming</li>
                        <li>VRP Plastic and Trim</li>

                        <li>Dusting</li>
                      </ul>
                    </p>
                  </Fade>
                </Tab.Pane>
                <Tab.Pane eventKey="exterior">
                  <Fade bottom delay={1000} duration={1500}>
                    <h2 className="package-sub">Starts at $75</h2>
                  </Fade>
                  <Fade>
                    <h1 className="package-head">Exterior</h1>
                  </Fade>
                  <Fade top delay={1000} duration={1500}>
                    <p>
                      <ul className="package-list">
                        <li>Pressure Wash</li>
                        <li>Tire Shine</li>
                        <li>
                          {" "}
                          <b>Streak Free </b>Windshield and Mirror Shine
                        </li>
                        <li>VPR Trim Shine and Protection</li>
                      </ul>
                    </p>
                  </Fade>
                </Tab.Pane>
                <Tab.Pane eventKey="interior">
                  <Fade bottom delay={1000} duration={1500}>
                    <h2 className="package-sub">Starts at $50</h2>
                  </Fade>
                  <Fade>
                    <h1 className="package-head">Full Extraction</h1>
                  </Fade>
                  <Fade top delay={1000} duration={1500}>
                    <div className="package-list">
                      <li>Soap and Stain Extraction On Seats</li>
                      <li>Spot Cleaning</li>
                    </div>
                  </Fade>
                </Tab.Pane>
              </Tab.Content>
            </Col>
            {/* image container begins here */}
            <Col center md={5} className="fill-justify">
              <Tab.Content className="image-tab">
                <Tab.Pane eventKey="standard">
                  <Fade duration={1500}>
                    <img
                      src={image}
                      className="d-block w-100 h-50"
                      eventKey="standard"
                      alt="Cannot be Viewed at This Time"
                    />
                  </Fade>
                </Tab.Pane>
                <Tab.Pane eventKey="premium">
                  <Fade duration={1500}>
                    <img
                      src={image2}
                      className="d-block w-100 h-50"
                      eventKey="standard"
                      alt="Cannot be Viewed at This Time"
                    />
                  </Fade>
                </Tab.Pane>
                <Tab.Pane eventKey="exterior">
                  <Fade duration={1500}>
                    <img
                      src={image3}
                      className="d-box w-100 "
                      eventKey="standard"
                      alt="Cannot be Viewed at This Time"
                    />
                  </Fade>
                </Tab.Pane>
                <Tab.Pane eventKey="interior">
                  <Fade duration={1500}>
                    <img
                      src={image}
                      className="d-block w-100 h-50"
                      eventKey="standard"
                      alt="Cannot be Viewed at This Time"
                    />
                  </Fade>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
          <Row
            className="justify-content-md-center"
            style={{ paddingTop: "3rem", height: "10vh" }}
          >
            <Col className="bottom-left" md={12}>
              {/* <div className="packages-btn-container"> */}
              <Button
                className="m-3"
                id="package-btn-black"
                variant="light"
                onClick={() => smoothScroll()}
              >
                Schedule Now
              </Button>
              {/* </div> */}
            </Col>
            <Col md={5}></Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default Packages;
