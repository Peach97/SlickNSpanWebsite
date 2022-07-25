import React from "react";
import "./Slider.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";

export const Slider = ({ portrait, ...props }) => (
  <ReactCompareSlider
    {...props}
    portrait={portrait}
    itemOne={
      <ReactCompareSliderImage
        style={{ height: "35rem" }}
        src={props.src1}
        alt="one"
      />
    }
    itemTwo={
      <ReactCompareSliderImage
        style={{ height: "35rem" }}
        src={props.src2}
        alt="two"
      />
    }
    style={{ width: "100%", height: "100%" }}
  />
);
