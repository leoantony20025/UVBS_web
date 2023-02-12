import React from "react";
import Banner from "../components/Banner";
import photo from "../assets/home2.jpeg";
import "./About.css";
import Title from "../components/Title";
import Footer from "../components/Footer";
import director from "../assets/director.jpg";

function About() {
  return (
    <div className="about">
      <Banner
        h1={"About Us"}
        p={"Greetings to you in His mighty name!"}
        img={photo}
        page={"about"}
      />
      <div id="letter" className="a-letter">
        <div className="al-head">
          <img src={director} alt="" />
          <div>
            <h3>Director's Letter</h3>
            <span>Paul Viswanathan</span>
          </div>
        </div>
        <p>
          Dear friends,
          <br />
          <br /> Greetings to you in His mighty name! <br />
          <br /> Sharing the Gospel to the little hearts always gives us an
          immense joy and sharing the experience with God&#39;s people gives us
          great encouragement.
          <br />
          <br /> As most of you know, United VBS is a vision from God to reach
          children and the youth around us. We are 7 full time staff members and
          many volunteers. It is our burden to move around all the states of
          India to grab each and every available opportunity and work tirelessly
          for the sake of the Gospel. God has been faithful in enabling us to
          carry out our work. Every year, we the staff and our trainees reach
          more than a lakh of children. Also, we train thousands of young Bible
          teachers every year. As we are an interdenominational organization we
          reach all the denominational children and youth.
          <br />
          <br /> Leading the children to Christ is one phase and systematic
          Bible teaching is another phase of our ministry. It is also our vision
          to prepare a meaningful teaching material according to the sensitizing
          psychological need of the children and to teach them sincerely.
          <br />
          <br /> At this juncture, I would like to introduce the teaching
          material (Curriculum) that we have developed after doing extensive
          research and borrowing ideas from various people. As a man of God said
          “for every need ask God and share it with His people” we would like
          you to share with our printing needs. As the Lord leads you kindly
          take part with us in this urgent need.
          <br />
          <br /> We are always available for you to clear your querries.
          <br />
          <br /> God Bless you.
          <br />
          <br /> T. Paul Visvanathan
        </p>
      </div>
      <div style={{ marginTop: "300px", marginBottom: "-500px" }}>
        <Title
          img={
            "https://img.icons8.com/external-obvious-line-kerismaker/200/null/external-activities-stay-at-home-line-obvious-line-kerismaker-13.png"
          }
          title={"JOURNEY"}
        />
      </div>
      <div id="journey" className="jour">
        <div className="j-field" style={{ marginTop: 50 }}>
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>UVBS got registered</p>
        </div>
        <span></span>
        <div className="j-field">
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>First Board meeting, joining of Staff</p>
        </div>
        <span></span>
        <div className="j-field">
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>First Song Album Released</p>
          <span>16 March 2007 - Chennai</span>
        </div>
        <span></span>
        <div className="j-field">
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>UVBS Directors training</p>
          <span>27 April 2007 - Salem</span>
        </div>
        <span></span>
        <div className="j-field">
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>VBS in 28 places in Tamilnadu</p>
        </div>
        <span></span>
        <div className="j-field">
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>First Magazine</p>
          <span>July 2007 - Chennai</span>
        </div>
        <span></span>
        <div className="j-field">
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>Thanksgiving meetings / Released of first VCD</p>
        </div>
        <span></span>
        <div className="j-field">
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>Counseling camp for kids affected by Tsunami</p>
          <span>15,16,17 September 2007 - Velankanni</span>
        </div>
        <span></span>
        <div className="j-field">
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>UVBS songs were telecasted in Television channel</p>
          <span>15 September 2007</span>
        </div>
        <span></span>
        <div className="j-field">
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>Hindi, Marathi songs recording / released</p>
          <span>October 2007 - Mumbai</span>
        </div>
        <span></span>
        <div className="j-field">
          <img
            src="https://img.icons8.com/material-outlined/50/FD7E14/hot-air-balloon.png"
            alt=""
          />
          <p>MUF ministries held</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
