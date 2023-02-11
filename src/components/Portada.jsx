import React from "react";
import "../styles/Portada.css";
import video from "../media/Teclado.mp4";

const Portada = () => {
  return (
    // <div class="embed-responsive embed-responsive-16by9 portada1">
    //   <video
    //     class="embed-responsive-item"
    //     src={video}
    //     allowfullscreen
    //     autoPlay
    //     loop
    //   ></video>
    // </div>

    <div
      id="seccion1"
      className="embed-responsive embed-responsive-16by9 portada1"
    >
      <video src={video} autoPlay loop muted />
    </div>
  );
};

export default Portada;
