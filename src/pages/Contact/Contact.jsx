import React from "react";
import ContactBox from "../../components/ContactBox/ContactBox";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact" id="Contact">
        <h1>Contact Me</h1>
        <div className="boxes">
          <ContactBox
            animation="fade-right"
            class="fas fa-envelope"
            name="Email"
            link="https://mail.google.com"
          />
          <ContactBox
            animation="fade-up"
            class="fab fa-github"
            name="Github"
            link="https://github.com/"
          />
          <ContactBox
            animation="fade-left"
            class="fab fa-linkedin"
            name="Linkedin"
            link="https://www.linkedin.com/"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
