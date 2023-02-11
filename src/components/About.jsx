import React, { useEffect } from "react";
import "../styles/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import foto from "./imagenes/foto.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div class="container col-xxl-8 px-4 py-5" id="seccion2">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6 ">
          <div
            class="carreaux_presentation_light"
            style={{
              backgroundImage: `url(${foto})`,
              border: " 2px solid #333",
              borderRadius: "20px",
            }}
          >
            <div class="shadow_swhow_mini">
              <div class="deroul_titre">Heiner Arevalo</div>
              <div class="deroul_soustitre">Full Stack Developer</div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 ">
          <h1 class="display-5 fw-bold lh-1 mb-3 ">Sobre mi...</h1>
          <p class="lead" data-aos="fade-right">
            Soy desarrollador web con conocimiento en back-end y front-end,
            desarrollado a través de proyectos propios, y certificado como
            desarrollador Full stack por la academia SoyHenry, y estudiando .NET
            actualmente. Busco desarrollar mi carrera, aportando mis habilidades
            en JavaScript, .NET, Node.js, Express, React, Redux,SQL, entre
            otros, para lograr proyectos que satisfagan las necesidades y
            preferencias de los clientes.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              <a
                class="nav-link"
                href="https://wa.me/573209130823?text=hola,Heiner?"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp "></i> Contactame
              </a>
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              <a
                class="nav-link"
                href="https://drive.google.com/file/d/1Y2VotSlWA58UH2Es2sd31r3hkNIeHJ6p/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Ver CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
