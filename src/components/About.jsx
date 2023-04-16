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
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5 ">
        <div class=" col-md-4 col-xs-12 col-sm-8 col-md-6 mx-auto text-center  d-flex justify-content-center ">
          <div
            class="carreaux_presentation_light  "
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
            ¡Hola a todos! Mi nombre es Heiner Arevalo, y soy un apasionado
            desarrollador con una formación sólida en programación y tecnologías
            de vanguardia como .NET, JavaScript, Node, Firebase, React, CSS,
            Bootstrap y mas. Con un enfoque en la resolución de problemas y la
            creatividad, estoy comprometido a crear soluciones innovadoras y
            eficientes para cualquier desafío que se me presente. Me encanta
            trabajar en equipo y colaborar con otros para lograr resultados
            sorprendentes. En mi tiempo libre, disfruto hacer ejercicio. Gracias
            por visitar mi portafolio y espero tener la oportunidad de conectar
            y colaborar contigo en el futuro. ¡Hasta pronto!
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
                href="https://drive.google.com/file/d/1VXjV0lSt2qUmU4rRhBrH0PhCGSLC6N_0/view?usp=sharing"
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
