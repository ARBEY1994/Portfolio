import React from "react";
import "../styles/skills.css";
import { useEffect } from "react";
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
      <div class=" row align-items-center ">
        <div className="col-md-4 col-xs-12 col-sm-8 col-md-6 mx-auto text-center  d-flex justify-content-center ">
          <div
            className="compu col-md-4 col-xs-12 col-sm-8 col-md-6 "
            data-aos="zoom-in"
          >
            <Spline scene="https://prod.spline.design/Bo7-iKtKJDLdG9JC/scene.splinecode" />
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div
            class=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/fluency/144/000000/javascript.png"
              alt=""
            />
          </div>

          <div
            className=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/color/144/000000/nodejs.png"
              alt=""
            />
          </div>

          <div
            className=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/color/144/000000/redux.png"
              alt=""
            />
          </div>
          <div
            className=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/ios/150/000000/express-js.png"
              alt=""
            />
          </div>

          <div
            className=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/color/144/000000/html-5--v2.png"
              alt=""
            />
          </div>
          <div
            className="col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/fluency/144/000000/css3.png"
              alt=""
            />
          </div>
          <div
            className=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/color/144/000000/material-ui.png"
              alt=""
            />
          </div>
          <div
            className=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/color/144/000000/postgreesql.png"
              alt=""
            />
          </div>
          <div
            className=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/office/160/000000/react.png"
              alt=""
            />
          </div>
          <div
            className=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/color/144/null/firebase.png"
              alt=" "
            />
          </div>
          <div
            className=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/ios-filled/150/null/github.png"
              alt=""
            />
          </div>
          <div
            className=" col-sm-3 col-xs-12 text-center mt-3 col-6 box"
            data-aos="zoom-in"
          >
            <img
              src="https://img.icons8.com/color/144/null/bootstrap.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
