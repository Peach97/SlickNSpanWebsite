import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductAccordion from "../../components/Accordion/Accordion";
import { Fade } from "react-reveal";
import "./Product.css";
import image from "../../images/car1.jpg";
import image2 from "../../images/car2.jpg";

function Product() {
  return (
    <>
      <div className="product" id="product-container">
        <div className="product-container" id="product-container">
          <Container fluid>
            <Row className="justify-content-md-center">
              {/* Accordion Column */}
              <Col md={5} className="accordion-col">
                <Fade left>
                  <p id="product-paragraph">
                    Check out the products we use to perfect our client's
                    detailing experience. While you're here, check out our
                    SlickSponsors sponsors on the right that made all of this
                    possible!
                  </p>
                </Fade>

                <Fade left>
                  <h2 id="product-subheader">Wheels</h2>
                </Fade>

                <ProductAccordion
                  header="Product 1"
                  text="This will be the information for Product 1"
                  header2="Product 2"
                  text2="This will be the information for Product 2"
                  header3="Product 3"
                  text3="This will be the information for Product 3"
                />
                <div>
                  <h2 id="product-subheader">Glass</h2>
                </div>
                <ProductAccordion
                  header="Product 1"
                  text="This will be the information for Product 1"
                  header2="Product 2"
                  text2="This will be the information for Product 2"
                  header3="Product 3"
                  text3="This will be the information for Product 3"
                />
                <h2 id="product-subheader">Rugs</h2>
                <ProductAccordion
                  header="Product 1"
                  text="This will be the information for Product 1"
                  header2="Product 2"
                  text2="This will be the information for Product 2"
                  header3="Product 3"
                  text3="This will be the information for Product 3"
                />
              </Col>
              {/* Image Column */}
              <Col md={5} className="product-img-container">
                <img src={image} alt="productImage" style={{ width: "100%", height: "50%" }} />{" "}
                <img src={image2} alt="productImage2" style={{ width: "100%", height: "50%" }} />
              </Col>
            </Row>
          </Container>
          ;
        </div>
      </div>
    </>
  );
}
export default Product;
