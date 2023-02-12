import React, { useEffect } from "react";
import "./Banner.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Banner({ img, h1, p, page }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${img})` }}>
      <header className="header-section">
        <img src={logo} alt="" />
        <div className="h-links">
          <Link
            to={"/"}
            style={
              page === "home"
                ? {
                    color: "orange",
                    borderBottom: "4px solid orange",
                    paddingBottom: "7px",
                  }
                : {}
            }
          >
            Home
          </Link>
          <Link
            to={"/about"}
            style={
              page === "about"
                ? {
                    color: "orange",
                    borderBottom: "4px solid orange",
                    paddingBottom: "7px",
                  }
                : {}
            }
          >
            About
          </Link>
          <Link
            to={"/contact"}
            style={
              page === "contact"
                ? {
                    color: "orange",
                    borderBottom: "4px solid orange",
                    paddingBottom: "7px",
                  }
                : {}
            }
          >
            Contact
          </Link>
        </div>
      </header>
      <div className="b-main">
        <h1>{h1}</h1>
        <span></span>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default Banner;
