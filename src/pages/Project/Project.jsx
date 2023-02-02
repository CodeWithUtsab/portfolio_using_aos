import React, { useEffect } from "react";
import ProjectBox from "../../components/ProjectBox/ProjectBox";

import "./Project.css";

import textutils from "../../images/TextUtils.png";
import portfolio from "../../images/Portfolio.png";
import food from "../../images/FoodDelivery.png";
import gym from "../../images/Gym.png";
import alarm from "../../images/AlarmClock.png";
import file from "../../images/FileDownloader.png";
import text from "../../images/TexttoSpeech.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="project" id="Project">
        <h1>My Projects</h1>
        <div data-aos="fade-up">
          <div className="boxes">
            <div className="carousel owl-carousel">
              <ProjectBox
                title="TextUtils using React"
                img={textutils}
                link="https://github.com/"
              />
              <ProjectBox
                title="Portfolio Website"
                img={portfolio}
                link="https://github.com/"
              />
              <ProjectBox
                title="Food Delivery Website"
                img={food}
                link="https://github.com/"
              />
              <ProjectBox
                title="Gym Website"
                img={gym}
                link="https://github.com/"
              />
              <ProjectBox
                title="Alarm Clock using js"
                img={alarm}
                link="https://github.com/"
              />
              <ProjectBox
                title="File downloader using js"
                img={file}
                link="https://github.com/"
              />
              <ProjectBox
                title="Text to speech using js"
                img={text}
                link="https://github.com/"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
