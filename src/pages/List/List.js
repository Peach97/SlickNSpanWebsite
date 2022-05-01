import React from "react";
import "/Users/janelleghanem/react-website/src/pages/List/List.css";
import { Sutton } from "/Users/janelleghanem/react-website/src/components/Sutton/Sutton.js";

function List() {
  return (
    <div id="list">
      <div className="list-container">
        {/* <p className="copy-wrapper">Text Example</p> */}
        <div className="list-stn">
          <Sutton
            className="stns-mobile"
            suttonStyle="stn--primary"
            suttonSize="stn--large"
          >
            Schedule Now
          </Sutton>
        </div>
      </div>
    </div>
  );
}

export default List;
