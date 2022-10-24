import React from "react";
import "../styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import imag from "./imagenes/imag_project2.jpg";
import image from "./imagenes/imag_project3.jpg";

const Slider = () => {
  return (
    <div className="container-carrusel">
      <div className="title-carrusel">
        <h2>MY PROJECTS</h2>
      </div>
      <Carousel
        centerMode={true}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        useKeyboardArrows={true}
        swipeable={true}
        stopOnHover={true}
        dynamicHeight={true}
      >
        <div className="imagen_carrusel">
          <img src={imag} alt="img no fount" />
          <p className="legend">Project 1</p>
        </div>
        <div className="imagen_carrusel">
          <img src={image} alt="img no fount" />
          <p className="legend">Project 2</p>
        </div>
        <div className="imagen_carrusel">
          <img src={imag} alt="img no fount" />
          <p className="legend">Project 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
