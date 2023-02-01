import React from "react";
import "./Testimonial.css";
import Title from "./Title";

function Testimonial() {
  return (
    <div className="testimonial">
      <Title
        img={
          "https://img.icons8.com/external-flaticons-lineal-flat-icons/200/000000/external-testimonials-customer-feedback-flaticons-lineal-flat-icons-2.png"
        }
        title={"TESTIMONIALS"}
      />
      <div className="t-main">
        <div className="tm-card">
          <img src="" alt="" />
          <div className="tmc-desc">
            <p>FullName</p>
            <span>Design</span>
          </div>
        </div>
        <div className="tm-card">
          <img src="" alt="" />
          <div className="tmc-desc">
            <p>FullName</p>
            <span>Design</span>
          </div>
        </div>
        <div className="tm-card">
          <img src="" alt="" />
          <div className="tmc-desc">
            <p>FullName</p>
            <span>Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
