import React from "react";
import "../styles/Portada.css";
import video from "../media/Teclado.mp4";

const Portada = () => {
  return (
    <div className="container-fluid " style={{ width: "100%" }} id="seccion1">
      <div class="portada1">
        <div class="row h-100">
          <video src={video} autoPlay loop muted />
        </div>
      </div>
    </div>
  );
};

export default Portada;
