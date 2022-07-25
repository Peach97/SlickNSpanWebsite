import React from "react";
import { Nav, Row, Tab } from "react-bootstrap";
import "./Listbar.css";
import Packages from "../../pages/Packages/Packages";
import Pricing from "../../pages/Pricing/Pricing";
import Product from "../../pages/Product/Product";

//element selector for listbar

const smoothScroll = () => {
  const element = document.getElementById("listbar-container");
  element.scrollIntoView({
    behavior: "smooth",
  });
};

function Listbar() {
  return (
    <>
      <div className="listbar-container" id="listbar-container">
        <Tab.Container id="tabs-fill" defaultActiveKey="packages">
          <Row>
            <Nav fill justify className="list-box" variant="pills">
              <Nav.Item className="tab-wrap">
                <Nav.Link
                  className="tab-link"
                  eventKey="packages"
                  onClick={() => smoothScroll()}
                >
                  {" "}
                  Packages
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="tab-wrap">
                <Nav.Link
                  className="tab-link"
                  eventKey="pricing"
                  onClick={() => smoothScroll()}
                >
                  {" "}
                  Pricing
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="tab-wrap">
                <Nav.Link
                  className="tab-link"
                  eventKey="products"
                  onClick={() => smoothScroll()}
                >
                  {" "}
                  Products
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Row>
            <Tab.Content>
              <Tab.Pane eventKey="packages">
                <Packages />
              </Tab.Pane>
              <Tab.Pane eventKey="pricing">
                <Pricing />
              </Tab.Pane>

              <Tab.Pane eventKey="products">
                <Product />{" "}
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default Listbar;
