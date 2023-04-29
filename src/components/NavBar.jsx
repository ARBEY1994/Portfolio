import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import logo from "../components/imagenes/Logo-arbey.gif";

const NavBar = ({ isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setShowDiv(false);
      } else {
        setShowDiv(true);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={` navbar fixed-top bg-light ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } ${
        scrolled
          ? "navbar shadow - on - scroll.scrolled"
          : "navbar shadow - on - scroll"
      } `}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#seccion1">
          <img src={logo} alt="not found" />
        </a>
        <div>
          {showDiv && (
            <ul class="nav justify-content-center ">
              <li class="nav-item">
                <a
                  class="nav-link  text-black btn btn-light mx-2"
                  href="#seccion1"
                >
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  text-black btn btn-light mx-2"
                  href="#seccion2"
                >
                  Sobre mi
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  text-black btn btn-light mx-2"
                  href="#seccion3"
                >
                  Habilidades
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  text-black btn btn-light mx-2"
                  href="#seccion4"
                >
                  Proyectos
                </a>
              </li>
            </ul>
          )}
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Contactame
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
              <li class="nav-item ">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="https://www.linkedin.com/in/heiner-arevalo-757937246/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white"
                  href="https://github.com/ARBEY1994"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-white"
                  href="
                  mailto:arbey221@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-envelope"></i>
                  Email
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link text-white"
                  href="https://wa.me/573209130823?text=hola,Heiner"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp "></i> Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
