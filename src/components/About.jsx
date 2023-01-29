import React, { useEffect } from "react";
import "../styles/About.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Spline from "@splinetool/react-spline";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="container-about" id="seccion2">
      <div className="about">
        <h3>About me</h3>
        <p data-aos="fade-right">
          Software developer with knowledge in back-end and front-end developed
          through own projects and certified as a full stack developer by the
          soyHenry academy. I seek to develop my career, contributing with my
          skills in JavaScript, Node.js, React, among others, to achieve final
          projects that meet the needs and preferences of clients.
        </p>

        <a
          href="https://drive.google.com/file/d/1U2jDUeRo47Zcl_jr58faZksXCkjWxPlK/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="botoncvA">See CV</button>
        </a>
      </div>

      <div className="about-img" data-aos="fade-down-left">
        <Spline scene="https://prod.spline.design/jrZMbZy72C6j0L4A/scene.splinecode" />
      </div>
    </div>
  );
};

export default About;
