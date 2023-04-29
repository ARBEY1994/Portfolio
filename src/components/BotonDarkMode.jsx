import React from "react";
import { useState } from "react";
import "../styles/butonDark.css";
import Ola from "./ola";
import Home from "./Home";

const ButonDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <div id="page" className={`page ${isDarkMode ? "dark-mode" : ""}`}>
        <Home isDarkMode={isDarkMode} />
        <Ola />
        <div className="contenedor-botonDark">
          <div
            id="id-sun"
            className={`btn-mode sun active2${
              !isDarkMode ? "btn-mode sun active2" : ""
            }`}
            onClick={toggleDarkMode}
          >
            <i class="fas fa-sun"></i>
          </div>
          <div
            id="id-moon"
            className={`btn-mode moon ${
              isDarkMode ? " btn-mode moon  active2" : ""
            }`}
            onClick={toggleDarkMode}
          >
            <i class="fas fa-moon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButonDark;
