import React from "react";
import "../styles/About.css";
import logoh from "./imagenes/ArbeyArevalo.jpg";

const About = () => {
  return (
    <div className="container-about">
      <div className="about">
        <h3>About me</h3>
        <p>
          Software developer with knowledge in back-end and front-end developed
          through own projects and certified as a full stack developer by the
          soyHenry academy. I seek to develop my career, contributing with my
          skills in JavaScript, Node.js, React, among others, to achieve final
          projects that meet the needs and preferences of clients.
        </p>
      </div>
      <div className="about-img">
        <img src={logoh} alt="" />
      </div>
    </div>
  );
};

export default About;
