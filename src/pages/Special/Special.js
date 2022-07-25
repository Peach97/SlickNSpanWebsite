import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Special.css";
import Lorem from "react-lorem-component";
import image from "../../images/car-white.png";

function Special() {
  return (
    <div className="special-box">
      <Container fluid className="special-requests-container">
        <Row>
          <h1 className="special-requests">Special Requests</h1>
        </Row>
        <Row>
          <Col md={4} className="special-requests-col">
            <p className="special-requests">
              Not seeing what you're looking for? No worries, we'll talk about
              customizing your package. Send us a message and a representative
              will respond to you as soon as possible.
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Button
            className="special-btn"
            variant="dark"
            style={{
              borderRadius: "36px",
              fontWeight: "100",
              fontSize: "24px",
            }}
          >
            Reach Us
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Special;
