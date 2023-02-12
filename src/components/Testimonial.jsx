import React from "react";
import "./Testimonial.css";
import Title from "./Title";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

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
        <TestCard
          img={img2}
          name={"Mr. Don Franklin Daniel"}
          role={"Production(Audio)"}
        />
        <TestCard
          img={img4}
          name={"Mr. S. Joel"}
          role={"Literature Secretary"}
        />
        <TestCard
          img={img3}
          name={"Mr. Ebenazer Devadoss"}
          role={"Field Staff"}
        />
        <TestCard
          img={img5}
          name={"Rev. Mrs. B. Obediya Nithyan"}
          role={"Curriculam Secretary"}
        />
        <TestCard
          img={img6}
          name={"Rev. P. Paul Gnana Nithyan"}
          role={"Promotion Director"}
        />
      </div>
    </div>
  );
}

export default Testimonial;

export const TestCard = ({ img, name, role }) => {
  return (
    <div className="tm-card">
      <img src={img} alt="" />
      <p>{name}</p>
      <span>{role}</span>
    </div>
  );
};
