import React from "react";
import "../styles/ola.css";

const Ola = () => {
  return (
    <div className="HondaHome">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        className="HondaSvg"
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" // https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections   link de pagina para crear olas.S
          className="HondaPath"
        ></path>
      </svg>
    </div>
  );
};

export default Ola;
