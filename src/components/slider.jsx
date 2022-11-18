import React, { useEffect } from "react";

import "../styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import imag from "./imagenes/velvet6.jpg";
import image from "./imagenes/imagenVideogame3.png";
import images from "./imagenes/pokes.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Slider = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="container-carrusel" id="seccion4">
      <div className="title-carrusel" data-aos="fade-down-right">
        <h2>MY PROJECTS</h2>
      </div>
      <div data-aos="fade-down-left">
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
          <a title="velvet" href="https://velvetpf.vercel.app/">
            <div className="imagen_carrusel">
              <img src={imag} alt="img no fount" />

              <p className="legend">Project 1</p>
            </div>
          </a>
          <a href="https://github.com/ARBEY1994/PI_VideoGames">
            <div className="imagen_carrusel">
              <img src={image} alt="img no fount" />
              <p className="legend">Project 2</p>
            </div>
          </a>
          <a href="https://github.com/ARBEY1994/PI-POKEMON">
            <div className="imagen_carrusel">
              <img src={images} alt="img no fount" />
              <p className="legend">Project 3</p>
            </div>
          </a>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
