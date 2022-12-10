import React, { useState } from "react";
import "../styles/NavBar.css";
import iconH from "../components/imagenes/iconHeaders.png";
import list from "../components/imagenes/icons8-menu.gif";

const NavBar = ({ isScrolling }) => {
  const arriba = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [state, setState] = useState(false);

  return (
    <nav className={`navBar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="menu_bar" onClick={() => setState(!state)}>
        <p className="bt_menu">
          {" "}
          <img src={list} alt="list" />
          Menu
        </p>
      </div>
      <div className={`logona ${state && "open"}`} onClick={arriba}>
        <div className="namen">
          <p>Heiner Arevalo</p>
        </div>
        <div className={`linksNav ${state && "open"}`}>
          <div className="ojooNav">
            <img src={iconH} alt="header" />
            <a href="#seccion1" onClick={() => setState(!state)}>
              Header
            </a>
          </div>
          <div className="ojooNav">
            <img
              src="https://img.icons8.com/ios-filled/50/null/guest-male--v2.png"
              alt="abaut"
            />
            <a href="#seccion2" onClick={() => setState(!state)}>
              About me
            </a>
          </div>
          <div className="ojooNav">
            <img
              src="https://img.icons8.com/ios/50/null/development-skill.png"
              alt="skill"
            />
            <a href="#seccion3" onClick={() => setState(!state)}>
              Skills
            </a>
          </div>
          <div className="ojooNav">
            <img
              src="https://img.icons8.com/ios/50/null/ms-project.png"
              alt="proj"
            />
            <a href="#seccion4" onClick={() => setState(!state)}>
              Projects
            </a>
          </div>
          <div className="ojooNav">
            <img
              src="https://img.icons8.com/ios/50/null/phone-contact.png"
              alt="cont"
            />
            <a href="#seccion5" onClick={() => setState(!state)}>
              Contac me
            </a>
          </div>
          <div className="nav_toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
