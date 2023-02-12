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
          <Link to={"/#acts"}>Activities</Link>
          <Link to={"/#"}>Themes</Link>
          <Link to={"/#testimonials"}>Testimonials</Link>
        </div>
        <div>
          <p>
            About <span></span>
          </p>
          <Link to={"/#"}>Story</Link>
          <Link to={"/about#"}>Director's Letter</Link>
          <Link to={"/about#"}>Journey</Link>
        </div>
        <div>
          <p>
            Contact <span></span>
          </p>
          <Link to={"/contact"}>Location</Link>
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
