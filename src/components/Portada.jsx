import React from "react";
import "../styles/Portada.css";
import video from "../media/Teclado.mp4";

const Portada = () => {
  return (
    <div className=" embed-responsive embed-responsive-16by9" id="seccion1">
      <div class="row embed-responsive-item portada1 ">
        <video src={video} type="video/mp4" autoPlay loop muted />
      </div>
    </div>
  );
};

export default Portada;
