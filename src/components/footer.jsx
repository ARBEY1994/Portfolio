import React from "react";
import "../styles/footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer_info">
        <h1>Heiner Arevalo</h1>
        <p>Puerto Asis/Putumayo/Colombia</p>
      </div>
      <div className="footer_contact">
        <h3>Contact me</h3>
        <p>let's go with everything</p>
      </div>
      <div className="footer_sns">
        <div className="desing_by">Desing by Heiner Arevalo</div>
      </div>
      <div className="sns_links">
        <a
          href="https://www.linkedin.com/in/heiner-arevalo-757937246/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin linkedin"></i>
        </a>
        <a href="https://github.com/ARBEY1994" target="_blank" rel="noreferrer">
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
      </div>
    </footer>
  );
};

export default footer;
