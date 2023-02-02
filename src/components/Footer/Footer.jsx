import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="author">
          <p>
            Created by{" "}
            <a
              href="https://drive.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Utsab Sarkar
            </a>{" "}
            with <i className="far fa-heart"></i>
          </p>
        </div>
        <div className="">
          <p className="copyright">
            {" "}
            <i className="far fa-copyright"></i> 2023 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
