import React from "react";
import "../styles/About.css";
import imgen from "../media/imagen-about.jpg";

const About = () => {
  return (
    <div className="container-about">
      <div className="about">
        <h3>hola momgolaas</h3>
        <p>
          lorem30 pedorororo todos
          udddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddds
        </p>
      </div>
      <div className="about-img">
        <img src={imgen} alt="" />
      </div>
    </div>
  );
};

export default About;
