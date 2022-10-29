import React from "react";
import "../styles/Portada.css";
import video from "../media/videoP.mp4";

const Portada = () => {
  return (
    <div className="portada1">
      <video className="videoPortada" src={video} autoPlay loop muted />

      <h1>Heiner Arevalo</h1>
      <p>
        Full Stack Developer | Node.js | Express | Sequelize | React | Redux{" "}
      </p>
    </div>
  );
};

export default Portada;
