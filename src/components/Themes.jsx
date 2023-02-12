import React from "react";
import "./Themes.css";
import t9 from "../assets/t9.png";
import t10 from "../assets/t10.png";
import t12 from "../assets/t12.png";
import t13 from "../assets/t13.png";
import t14 from "../assets/t14.png";
import t15 from "../assets/t15.png";
import Title from "./Title";

function Themes() {
  return (
    <div className="themes">
      <Title
        img={"https://img.icons8.com/ios/150/null/themes.png"}
        title={"ThEMES"}
      />
      <div className="th-body">
        <ThemeCard img={t10} title={"Sing Unto The Lord..."} year={"207"} />
        <ThemeCard img={t10} title={"Theme Title 2"} year={"2008"} />
        <ThemeCard img={t10} title={"Come and Dine"} year={"2009"} />
        <ThemeCard img={t10} title={"Theme Tile 4"} year={"2010"} />
        <ThemeCard img={t10} title={"God's Way"} year={"2011"} />
        <ThemeCard img={t10} title={"Theme Title 6"} year={"2012"} />
        <ThemeCard img={t10} title={"Abide in me"} year={"2013"} />
        <ThemeCard img={t10} title={"You are Called"} year={"2014"} />
        <ThemeCard img={t9} title={"In The Way of Truth"} year={"2015"} />
        <ThemeCard img={t10} title={"Come Let's Praise"} year={"2016"} />
        <ThemeCard img={t10} title={"God Who Sees Me"} year={"2017"} />
        <ThemeCard img={t12} title={"My Potter And Me"} year={"2018"} />
        <ThemeCard img={t13} title={"Image of God"} year={"2019"} />
        <ThemeCard img={t14} title={"Online UVBS"} year={"2020"} />
        <ThemeCard img={t15} title={"Sowing And Reaping"} year={"2021"} />
        <ThemeCard img={t10} title={"Living As Disciple"} year={"2022"} />
        <ThemeCard img={t10} title={"Come and See"} year={"2023"} />
      </div>
    </div>
  );
}

export default Themes;

export const ThemeCard = ({ img, title, year }) => {
  return (
    <div className="th-card">
      <img src={img} alt="" />
      <div>
        <p>{title}</p>
        <span>{year}</span>
      </div>
    </div>
  );
};
