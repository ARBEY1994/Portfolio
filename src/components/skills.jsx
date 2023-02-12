import React from "react";
import "../styles/skills.css";
import { useEffect } from "react";
import sequelize from "./imagenes/sequelize.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Spline from "@splinetool/react-spline";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div class="container-fluid" id="seccion3">
      <div class="d-flex justify-content-center">
        <div className="compu" data-aos="zoom-in">
          <Spline scene="https://prod.spline.design/Bo7-iKtKJDLdG9JC/scene.splinecode" />
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3 box" data-aos="zoom-in">
            <img
              src="https://img.icons8.com/fluency/144/000000/javascript.png"
              alt=""
            />
          </div>

          <div className="col-sm-3 box" data-aos="zoom-in">
            <img
              src="https://img.icons8.com/color/144/000000/nodejs.png"
              alt=""
            />
          </div>

          <div className="col-sm-3 box" data-aos="zoom-in">
            <img
              src="https://img.icons8.com/color/144/000000/redux.png"
              alt=""
            />
          </div>
          <div className="col-sm-3 box" data-aos="zoom-in">
            <img
              src="https://img.icons8.com/ios/150/000000/express-js.png"
              alt=""
            />
          </div>

          <div className="col-sm-3 box">
            <img
              src="https://img.icons8.com/color/144/000000/html-5--v2.png"
              alt=""
            />
          </div>
          <div className="col-sm-3 box">
            <img
              src="https://img.icons8.com/fluency/144/000000/css3.png"
              alt=""
            />
          </div>
          <div className="col-sm-3 box">
            <img
              src="https://img.icons8.com/color/144/000000/material-ui.png"
              alt=""
            />
          </div>
          <div className="col-sm-3 box">
            <img
              src="https://img.icons8.com/color/144/000000/postgreesql.png"
              alt=""
            />
          </div>
          <div className="col-sm-3 box" data-aos="zoom-in">
            <img
              src="https://img.icons8.com/office/160/000000/react.png"
              alt=""
            />
          </div>
          <div className="col-sm-3 box" data-aos="zoom-in">
            <img src={sequelize} alt="" />
          </div>
          <div className="col-sm-3 box" data-aos="zoom-in">
            <img
              src="https://img.icons8.com/ios-filled/150/null/github.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
