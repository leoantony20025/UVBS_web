import React from "react";
import "./Banner.css";

function Banner({ img, h1, p }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${img})` }}>
      <div className="b-main">
        <h1>{h1}</h1>
        <span></span>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default Banner;
