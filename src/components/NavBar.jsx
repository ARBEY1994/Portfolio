import React from "react";
import "../styles/NavBar.css";

const NavBar = ({ isScrolling }) => {
  const arriba = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <nav className={`navBar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="logona" onClick={arriba}>
        hola
      </div>
    </nav>
  );
};

export default NavBar;
