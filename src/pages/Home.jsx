import React from "react";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import Title from "../components/Title";
import sImg from "../assets/home.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner
        img={sImg}
        h1={"UNITED VACATION BIBLE SCHOOL"}
        p={
          "Those who do not know Christ should know and those who know should grow in Him"
        }
      />
      <div className="acts">
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
          <img
            src="https://img.icons8.com/wired/200/null/children.png"
            alt=""
          />
          <h2>2,25,000+</h2>
          <span></span>
          <p>children met through our regular programmes through the year</p>
        </div>
        <div className="r-card">
          <img
            src="https://img.icons8.com/wired/200/null/children.png"
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
            src="https://img.icons8.com/wired/200/null/children.png"
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
            src="https://img.icons8.com/wired/200/null/children.png"
            alt=""
          />
          <h2>8,000+</h2>
          <span></span>
          <p>churches are utilizing our ministry althrough the year</p>
        </div>
      </div>
      <Testimonial />
    </div>
  );
}

export default Home;
