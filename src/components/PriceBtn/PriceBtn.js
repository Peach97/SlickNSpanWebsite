import React from "react";
import { Button } from "react-bootstrap";
function PriceBtn() {
  return (
    <>
      <Button
        className="price-btn"
        id="price-btn"
        variant="light"
        // onClick={() => setActive("tabs-fill-tabpane-packages")}
      >
        More Details
      </Button>
    </>
  );
}
export default PriceBtn;
