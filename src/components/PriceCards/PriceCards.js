import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import logo from "../../images/Group 2.png";
import "./PriceCards.css";

function PriceCards(props) {
  return (
    <>
      <Container>
        <Row fill justify>
          <Col className="pricing-col">
            <div className="price-card-whole">
              <Card className="price-card-wrapper">
                <Card.Body className="price-card-body">
                  <Card.Header>
                    <img src={logo} alt="Cannot be Viewed at This Time" />
                  </Card.Header>
                </Card.Body>
                <Card.Body className="price-card-body">
                  <Card.Header className="price-title">
                    {props.header}
                  </Card.Header>
                </Card.Body>
                {/* <PriceBtn /> */}

                <Card.Footer className="price-footer">
                  {props.footer}
                </Card.Footer>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default PriceCards;
