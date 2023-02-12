import React, { useState } from "react";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import Title from "../components/Title";
import sImg from "../assets/home.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import contactIcon from "../assets/contact.jpg";
import Themes from "../components/Themes";

function Home() {
  const [email, setEmail] = useState({
    subject: "",
    message: "",
  });

  return (
    <div className="home">
      <Banner
        img={sImg}
        h1={"UNITED VACATION BIBLE SCHOOL"}
        p={
          "Those who do not know Christ should know and those who know should grow in Him"
        }
        page={"home"}
      />
      <div className="h-about">
        <div className="ha-left">
          <h2>How It Happened</h2>
        </div>
        <div className="ha-right">
          <p>
            At the end of 2006, brothers who had burden and ministering among
            children and youth at various parts of Tamilnadu for many years
            joined together. Keeping in mind the encouragement of various church
            leaders and the need of the nation we started praying.
          </p>
          <p>
            As a result, in January 2007 a name for the ministry was selected
            and on the 10th of the same month, this ministry was registered with
            the Government. The first work started during the first board
            meeting that was held on 10th February 2007.
          </p>
          <Link to={"/about"}>About US</Link>
        </div>
      </div>
      <div id="acts" className="acts">
        <Title
          img={
            "https://img.icons8.com/external-obvious-line-kerismaker/200/null/external-activities-stay-at-home-line-obvious-line-kerismaker-13.png"
          }
          title={"ACTIVITIES"}
        />
        <div className="a-grid">
          <div className="ag-row">
            <div>
              <p>
                Open Air Ministry <span></span>
              </p>
              <img src={sImg} alt="" />
            </div>
            <div>
              <p>
                Sunday School Retreat <span></span>
              </p>
              <img src={sImg} alt="" />
            </div>
          </div>
          <div className="ag-rowm">
            <p>
              Vacation Bible School <span></span>
            </p>
            <img src={sImg} alt="" />
          </div>
          <div className="ag-row">
            <div>
              <p>
                School Meetings <span></span>
              </p>
              <img src={sImg} alt="" />
            </div>
            <div>
              <p>
                Camp <span></span>
              </p>
              <img src={sImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="rep">
        <div className="r-card">
          <img src="https://img.icons8.com/dotty/80/null/children.png" alt="" />

          <h2>2,25,000+</h2>
          <span></span>
          <p>children met through our regular programmes through the year</p>
        </div>
        <div className="r-card">
          <img
            src="https://img.icons8.com/dotty/80/null/teenager-male.png"
            alt=""
          />
          <h2>49,000+</h2>
          <span></span>
          <p>
            young people are trained through direct training programmes and
            through indirect means by equipping them to train others
          </p>
        </div>
        <div className="r-card">
          <img
            src="https://img.icons8.com/dotty/80/null/defend-family.png"
            alt=""
          />
          <h2>15,000+</h2>
          <span></span>
          <p>
            families are directly receiving spiritual benefits through our
            programmes
          </p>
        </div>
        <div className="r-card">
          <img
            src="https://img.icons8.com/dotty/80/null/city-church.png"
            alt=""
          />
          <h2>8,000+</h2>
          <span></span>
          <p>churches are utilizing our ministry althrough the year</p>
        </div>
      </div>
      <Themes />
      <span id="testimonials"></span>
      <Testimonial />
      <div className="h-con">
        <img src={contactIcon} alt="" />
        <div className="hc-head">
          <p>Get in touch with us</p>
          <Link to={"/contact"}>Contact US</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
