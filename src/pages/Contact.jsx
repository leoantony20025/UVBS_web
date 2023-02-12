import React, { useState } from "react";
import Banner from "../components/Banner";
import "./Contact.css";
import photo from "../assets/home5.jpg";
import Title from "../components/Title";
import Footer from "../components/Footer";
import contactIcon from "../assets/contact.jpg";

function Contact() {
  const [email, setEmail] = useState({
    subject: "",
    message: "",
  });
  return (
    <div className="contact">
      <Banner
        h1={"Contact Us"}
        p={"Greetings to you in His mighty name!"}
        img={photo}
        page={"contact"}
      />
      <Title title={"Location"} />
      <div id="location" className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2258.376238230775!2d78.6576044732031!3d10.811862012996636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf57e4ebbeff5%3A0xe2030df997d66378!2s36%2F337%2C%203rd%20Cross%20St%2C%20Shanmugha%20Nagar%20West%20Extension%2C%20Shanmuga%20Nagar%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620102!5e0!3m2!1sen!2sin!4v1676138926424!5m2!1sen!2sin"
          allowfullscreen
          loading="lazy"
          title="UVBS"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>
          No. 337, 3rd Cross, <br />
          Shanmuga Nagar,
          <br />
          UKT Malai,
          <br />
          Trichy - 620 102
        </p>
      </div>
      <div className="h-con" style={{ marginBottom: 0 }}>
        <img src={contactIcon} alt="" />
        <div className="hc-head">
          <p>Get in touch with us</p>
          <input
            type="text"
            placeholder="subject"
            value={email.subject}
            onChange={(e) => setEmail({ ...email, subject: e.target.value })}
          />
          <textarea
            type="text"
            placeholder="message"
            value={email.message}
            onChange={(e) => setEmail({ ...email, message: e.target.value })}
          ></textarea>
          <a
            href={`mailto:uvbs.online@gmai1.com?subject=${email.subject}&body=${email.message}`}
          >
            Contact US
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
