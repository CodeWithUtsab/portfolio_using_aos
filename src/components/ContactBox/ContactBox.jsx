import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import "./ContactBox.css";

const ContactBox = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="box" data-aos={props.animation}>
        <div className="center">
          <a
            href={props.link}
            className="center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={props.class}></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactBox;
