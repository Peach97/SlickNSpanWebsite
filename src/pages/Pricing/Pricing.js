import React, { useState } from "react";
import { Row, Tab, Nav, Col } from "react-bootstrap";
import PriceCards from "../../components/PriceCards/PriceCards";
import { Fade } from "react-reveal";
import "./Pricing.css";

function Pricing() {
  const [active, setActive] = useState("FirstCards");
  return (
    <>
      <div className="pricing-container">
        <Tab.Container id="tabs-fill" defaultActiveKey="2-Door">
          <Row>
            <Nav center className="price-box" variant="pills">
              <Nav.Item className="pricing-wrap">
                <Nav.Link
                  className="pricing-link"
                  eventKey="2-Door"
                  onClick={() => setActive("FirstCards")}
                >
                  {" "}
                  2-Door
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="pricing-wrap">
                <Nav.Link
                  className="pricing-link"
                  eventKey="4-Door"
                  onClick={() => setActive("SecondCards")}
                >
                  {" "}
                  4-Door
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="pricing-wrap">
                <Nav.Link
                  eventKey="SUVs"
                  className="pricing-link"
                  onClick={() => setActive("ThirdCards")}
                >
                  {" "}
                  SUVs
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="pricing-wrap">
                <Nav.Link
                  eventKey="Trucks"
                  className="pricing-link"
                  onClick={() => setActive("FourthCards")}
                >
                  {" "}
                  Trucks
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Tab.Content>
            <Tab.Pane eventKey="2-Door">
              <Row style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
                <Col>
                  {active === "FirstCards" && (
                    <Fade>
                      <PriceCards
                        header="Full Interior/Exterior"
                        footer="$75"
                        path="/"
                      />
                    </Fade>
                  )}
                </Col>
                <Col>
                  {active === "FirstCards" && (
                    <Fade>
                      <PriceCards header="Full Detail" footer="$150" path="/" />
                    </Fade>
                  )}
                </Col>
                <Col>
                  {active === "FirstCards" && (
                    <Fade>
                      <PriceCards
                        header="Full Extraction"
                        footer="$50"
                        path="/"
                      />
                    </Fade>
                  )}
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="4-Door">
              <Row style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
                <Col>
                  {active === "SecondCards" && (
                    <Fade>
                      <PriceCards
                        header="Full Interior/Exterior"
                        footer="$75"
                        path="/"
                      />
                    </Fade>
                  )}
                </Col>
                <Col>
                  {active === "SecondCards" && (
                    <Fade>
                      <PriceCards header="Full Detail" footer="$150" path="/" />
                    </Fade>
                  )}
                </Col>
                <Col>
                  {active === "SecondCards" && (
                    <Fade>
                      <PriceCards
                        header="Full Extraction"
                        footer="$75"
                        path="/"
                        list1="Steam Clean"
                        list2="Vacuum"
                        list3="Interior Spot Cleaning"
                        list4="VRP Plastic and Trim"
                      />
                    </Fade>
                  )}
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="SUVs">
              <Row style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
                <Col>
                  {active === "ThirdCards" && (
                    <Fade>
                      <PriceCards
                        header="Full Interior/Exterior"
                        footer="$100"
                        path="/"
                      />
                    </Fade>
                  )}
                </Col>
                <Col>
                  {active === "ThirdCards" && (
                    <Fade>
                      <PriceCards header="Full Detail" footer="$175" path="/" />
                    </Fade>
                  )}
                </Col>
                <Col>
                  {active === "ThirdCards" && (
                    <Fade>
                      <PriceCards
                        header="Full Extraction"
                        footer="$75"
                        path="/"
                      />
                    </Fade>
                  )}
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Trucks">
              <Row style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
                <Col>
                  {active === "FourthCards" && (
                    <Fade>
                      <PriceCards
                        header="Full Interior/Exterior"
                        footer="$100"
                        path="/"
                      />
                    </Fade>
                  )}
                </Col>
                <Col>
                  {active === "FourthCards" && (
                    <Fade>
                      <PriceCards header="Full Detail" footer="$175" path="/" />
                    </Fade>
                  )}
                </Col>
                <Col>
                  {active === "FourthCards" && (
                    <Fade>
                      <PriceCards
                        header="Full Extraction"
                        footer="$75"
                        path="/"
                      />
                    </Fade>
                  )}
                </Col>
              </Row>
            </Tab.Pane>
            {/* #This is where the next row begins */}
          </Tab.Content>
        </Tab.Container>
        <div className="pricing-bottom-text">
          *Prices may vary based on condition of vehicle
        </div>
      </div>
    </>
  );
}
export default Pricing;
