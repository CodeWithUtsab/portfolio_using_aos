import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import about from "../../images/about_page.png";

import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="about" id="About">
        <h1>About Me</h1>
        <div className="about-flex" data-aos="fade-up">
          <div className="left-content">
            <img src={about} alt="About Image" />
          </div>
          <div className="right-content">
            <h2>I'm John</h2>
            <p>
              Hi, my name is John Doe and I am a full-stack web developer with
              5+years of experience with modern technologies like React js, Node
              js, Next js, Mongo DB etc....
            </p>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
