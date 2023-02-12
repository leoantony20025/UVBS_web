import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="f-title">
        <img src={logo} alt="" />
        <p>UNITED VBS</p>
      </div>
      <div className="f-body">
        <div>
          <p>
            Home <span></span>
          </p>
          <a href={"/#story"}>Story</a>
          <a href={"/#acts"}>Activities</a>
          <a href={"/#themes"}>Themes</a>
          <a href={"/#testimonials"}>Testimonials</a>
        </div>
        <div>
          <p>
            About <span></span>
          </p>
          <a href={"/about#letter"}>Director's Letter</a>
          <a href={"/about#journey"}>Journey</a>
        </div>
        <div>
          <p>
            Contact <span></span>
          </p>
          <a href={"/contact#location"}>Location</a>
        </div>
      </div>
      <div className="f-links">
        <p>
          Social <span></span>
        </p>
        <div>
          <a href="tel: +91 94431 76680">
            <img
              src="https://img.icons8.com/material-outlined/40/FFFFFF/phone.png"
              alt=""
            />
          </a>
          <a href="mailto: paul_uvbs@yahoo.co.in">
            <img
              src="https://img.icons8.com/material-outlined/40/FFFFFF/mail.png"
              alt=""
            />
          </a>
          <a href="https://www.youtube.com/@UVBSOfficial">
            <img
              src="https://img.icons8.com/material-outlined/40/FFFFFF/youtube.png"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/unitedvbs/">
            <img
              src="https://img.icons8.com/material-outlined/40/FFFFFF/facebook.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
