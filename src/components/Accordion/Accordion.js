import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import "./Accordion.css";

function ProductAccordion(props) {
  return (
    <>
      <Accordion flush className="product-drop-wrapper">
        <AccordionItem eventKey="0" className="product-item">
          <AccordionHeader> {props.header}</AccordionHeader>
          <AccordionBody>{props.text}</AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="1">
          <AccordionHeader> {props.header2}</AccordionHeader>
          <AccordionBody>{props.text2}</AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="2">
          <AccordionHeader> {props.header3}</AccordionHeader>
          <AccordionBody>{props.text3}</AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
}
export default ProductAccordion;
