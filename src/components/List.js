import React from "react";
import "/Users/janelleghanem/react-website/src/components/List.css";
import { Sutton } from "./Sutton";

function List() {
  return (
    <div className="list-container">
      <p class="copy-wrapper">Text Example</p>
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
  );
}

export default List;
