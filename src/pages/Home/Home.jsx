import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import home from "../../images/home_page.png";

import "./Home.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="home" id="Home">
        <div className="home-flex">
          <div
            className="left-content"
            data-aos="fade-down"
            data-aos-delay="2000"
          >
            <p>Hello, My name is</p>
            <h1>John</h1>
            <h2>
              And I'm a <span className="typing"></span>
            </h2>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
          <div
            className="right-content"
            data-aos="fade-up"
            data-aos-delay="2000"
          >
            <img src={home} alt="Home Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
