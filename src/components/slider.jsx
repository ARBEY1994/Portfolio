import React, { useEffect } from "react";
import "../styles/slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import imag from "./imagenes/velvet6.png";
import image from "./imagenes/imagenVideogame3.png";
import images from "./imagenes/pokes.png";
import manicura from "./imagenes/manicuraAnny.png";
import estudent from "./imagenes/ImagenAppEst.jpg";
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
      <div className="title-carrusel" data-aos="fade-right">
        <h1 class="display-5 fw-bold lh-1 mb-3 ">Mis proyectos</h1>
      </div>
      <div className="container_project">
        <Carousel
          centerMode={true}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          useKeyboardArrows={true}
          swipeable={true}
          stopOnHover={true}
          dynamicHeight={true}
          fontSize="10em"
        >
          <a
            title="velvet"
            href="https://velvetpf.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="imagen_carrusel">
              <img src={imag} alt="img no fount" />

              <p className="legend">Project 1</p>
            </div>
          </a>
          <a
            href="https://video-games-pearl.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="imagen_carrusel">
              <img src={image} alt="img no fount" />
              <p className="legend">Project 2</p>
            </div>
          </a>
          <a
            href="https://github.com/ARBEY1994/PI-POKEMON"
            target="_blank"
            rel="noreferrer"
          >
            <div className="imagen_carrusel">
              <img src={images} alt="img no fount" />
              <p className="legend">Project 3</p>
            </div>
          </a>
          <a
            title="velvet"
            href="https://project-manicura.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="imagen_carrusel">
              <img src={manicura} alt="img no fount" />

              <p className="legend">Project 4</p>
            </div>
          </a>
          <a
            title="velvet"
            href="https://prueba-t.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="imagen_carrusel">
              <img src={estudent} alt="img no fount" />

              <p className="legend">Project 5</p>
            </div>
          </a>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
