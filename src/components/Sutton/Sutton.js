import React from "react";
import "./Sutton.css";

const STYLES = ["stn--primary", "stn--outline", "stn--test"];

const SIZES = ["stn--medium", "stn--large"];

export const Sutton = ({
  children,
  type,
  onClick,
  suttonStyle,
  suttonSize,
}) => {
  const checkSuttonStyle = STYLES.includes(suttonStyle)
    ? suttonStyle
    : STYLES[0];

  const checkSuttonSize = SIZES.includes(suttonSize) ? suttonSize : SIZES[0];

  return (
    <a href="/" className="stn-mobile" target="blank">
      <button
        className={`stn ${checkSuttonStyle} ${checkSuttonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};
