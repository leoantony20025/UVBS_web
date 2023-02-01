import React from "react";
import "./Title.css";

function Title({ img, title }) {
  return (
    <div className="title">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <span></span>
    </div>
  );
}

export default Title;
