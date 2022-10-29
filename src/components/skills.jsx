import React from "react";
import "../styles/skills.css";
import sequelize from "./imagenes/sequelize.png";
const skills = () => {
  return (
    <div className="skills-container">
      <div className="title-skills">
        <h3>Skills</h3>
      </div>
      <div>
        <img
          src="https://img.icons8.com/fluency/144/000000/javascript.png"
          alt=""
        />
        <img src="https://img.icons8.com/color/144/000000/nodejs.png" alt="" />
        <img src="https://img.icons8.com/office/160/000000/react.png" alt="" />
        <img src="https://img.icons8.com/color/144/000000/redux.png" alt="" />
        <img
          src="https://img.icons8.com/ios/150/000000/express-js.png"
          alt=""
        />
        <img src={sequelize} alt="" />
        <img
          src="https://img.icons8.com/color/144/000000/html-5--v2.png"
          alt=""
        />
        <img src="https://img.icons8.com/fluency/144/000000/css3.png" alt="" />
        <img
          src="https://img.icons8.com/color/144/000000/material-ui.png"
          alt=""
        />
        <img
          src="https://img.icons8.com/color/144/000000/postgreesql.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default skills;
