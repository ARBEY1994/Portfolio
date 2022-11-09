import React, { useEffect } from "react";
import "../styles/About.css";
import logoh from "./imagenes/foto.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="container-about">
      <div className="about" data-aos="fade-down-right">
        <h3>About me</h3>
        <p>
          Software developer with knowledge in back-end and front-end developed
          through own projects and certified as a full stack developer by the
          soyHenry academy. I seek to develop my career, contributing with my
          skills in JavaScript, Node.js, React, among others, to achieve final
          projects that meet the needs and preferences of clients.
        </p>
      </div>
      <div className="about-img" data-aos="fade-down-left">
        <img src={logoh} alt="" />
      </div>
    </div>
  );
};

export default About;
