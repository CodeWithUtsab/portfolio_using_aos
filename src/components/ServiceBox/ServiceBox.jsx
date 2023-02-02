import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import "./ServiceBox.css";

const ServiceBox = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div data-aos={props.animation}>
        <div className="card">
          <div className="box">
            <div className="icon">
              <i className={props.icon}></i>
            </div>
            <div className="heading">{props.heading}</div>
            <div className="text">{props.text}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
