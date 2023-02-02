import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import "./ProjectBox.css";

const ProjectBox = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="projectbox">
        <img src={props.img} alt="images" />
        <div className="details">
          <p>{props.title}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
};
export default ProjectBox;
