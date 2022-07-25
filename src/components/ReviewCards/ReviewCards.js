import React from "react";
import { Card } from "react-bootstrap";
import "./ReviewCards.css";

export default function ReviewCards(props) {
  return (
    <Card className="review-card">
      <Card.Body className="review-body">
        <Card.Text className="review-card-text">{props.text}</Card.Text>
      </Card.Body>
      <div className="review-footer-container">
        <Card.Footer className="review-card-footer">{props.footer}</Card.Footer>
      </div>
    </Card>
  );
}
