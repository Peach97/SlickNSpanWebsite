import React from "react";
import "./Reviews.css";
import { Container, Row, Col } from "react-bootstrap";
import ReviewCards from "../../components/ReviewCards/ReviewCards";

function Reviews() {
  return (
    <>
      <Container fluid className="reviews-container">
        <Row className="review-row">
          <Col style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
            <ReviewCards
              text='"This detailing experience was amazing!"'
              footer={
                <div className="reviewer-text">
                  <h5>Bob Johnson</h5>
                  <h4>Tampa, FL</h4>
                </div>
              }
            />
          </Col>
          <Col style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
            <ReviewCards
              text='"Great job. Car clean."'
              footer={
                <div className="reviewer-text">
                  <h5>Bob Johnson</h5>
                  <h4>Tampa, FL</h4>
                </div>
              }
            />
          </Col>
          <Col style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
            <ReviewCards
              text='"They came to me and the price was great. No complaints"'
              footer={
                <div className="reviewer-text">
                  <h5>Bob Johnson</h5>
                  <h4>Tampa, FL</h4>
                </div>
              }
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Reviews;
