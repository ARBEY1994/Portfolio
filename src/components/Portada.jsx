import React from "react";
import "../styles/Portada.css";
import video from "../media/videoP.mp4";

const Portada = () => {
  return (
    <div className="portada1" id="seccion1">
      <video className="videoPortada" src={video} autoPlay loop muted />
      <div class="bg-5">
        <h1 class="animated-shadow">Heiner Arevalo</h1>
      </div>

      {/* <h1>Heiner Arevalo</h1> */}
      <p>
        Full Stack Developer | JavaScript | HTML | CSS | Node.js | Express | SQL
        | React | Redux
      </p>
    </div>
  );
};

export default Portada;
