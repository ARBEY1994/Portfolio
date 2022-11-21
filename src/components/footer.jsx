import React from "react";
import "../styles/footer.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <footer className="footer" id="seccion5">
      <div data-aos="fade-down-right">
        <div className="footer_info">
          <h1>Heiner Arevalo</h1>
          <p>Puerto Asis/Putumayo/Colombia</p>

          <h3>Contact me</h3>
        </div>

        <div className="sns_links">
          <a
            href="https://www.linkedin.com/in/heiner-arevalo-757937246/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/ARBEY1994"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github github"></i>
          </a>
          <a
            href="
          https://wa.me/573209130823?text=hola,Heiner"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp whatsapp"></i>
          </a>
          <a
            href="
          mailto:arbey221@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-envelope envelope" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="text_container" data-aos="fade-down-left">
        <h1>¡The power of imagination makes us infinite!</h1>
        <a
          href="https://drive.google.com/file/d/11lVpSSDYkX7LPRlRPE_m6mkw4MCWXN1T/view?usp=sharing"
          target="_blank"
        >
          <button className="botoncv">See CV</button>
        </a>
      </div>
      <div
        className="footer_sns"
        data-aos="flip-right"
        data-aos-duration="1000"
      >
        <div className="desing_by">Desing by Heiner Arevalo</div>
      </div>
    </footer>
  );
};

export default Footer;
