import React from "react";
import "../styles/NavBar.css";

const NavBar = ({ isScrolling }) => {
  const arriba = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <nav className={`navBar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="logona" onClick={arriba}>
        <div className="namen">
          <p>Heiner Arevalo</p>
        </div>
        <div className="linksNav">
          <a href="#seccion1">Header</a> <a href="#seccion2">About me</a>
          <a href="#seccion3">Skills</a>
          <a href="#seccion4">Projects</a>
          <a href="#seccion5">Contac me</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
