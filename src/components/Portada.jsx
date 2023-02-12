import React from "react";
import "../styles/Portada.css";
import video from "../media/Teclado.mp4";

const Portada = () => {
  return (
    <div className="container-fluid" id="seccion1">
      <div class="d-flex justify-content-center">
        <div class="row">
          <video src={video} autoPlay loop muted />
        </div>
      </div>
    </div>
  );
};

export default Portada;
