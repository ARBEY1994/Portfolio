import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logoA from "../components/imagenes/Logo-arbey.png";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">&copy; 2023 Copyright</p>

        <a
          href="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg class="bi me-2" width="100" height="80">
            <image href={logoA} />
          </svg>
        </a>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="#seccion1" class="nav-link px-2 text-muted">
              Inicio
            </a>
          </li>
          <li class="nav-item">
            <a href="#seccion2" class="nav-link px-2 text-muted">
              Sobre mi
            </a>
          </li>
          <li class="nav-item">
            <a href="#seccion3" class="nav-link px-2 text-muted">
              Habilidades
            </a>
          </li>
          <li class="nav-item">
            <a href="#seccion4" class="nav-link px-2 text-muted">
              Preyectos
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
