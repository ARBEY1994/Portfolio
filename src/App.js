import React, { useState } from "react";
import "./App.css";
import ButonDark from "./components/BotonDarkMode";
import { useEffect } from "react";
import logo from "./components/imagenes/1.png";

function App() {
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCargando(false);
    }, 1000); // simulando una carga de 2 segundos

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="App" id="page">
      {!cargando ? (
        <ButonDark />
      ) : (
        <div className="container">
          <img className=" img-fluid mx-auto" src={logo} alt="" />
        </div>
      )}
    </div>
  );
}

export default App;
