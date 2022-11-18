import React, { useState, useEffect } from "react";
import "./App.css";
import Portada from "./components/Portada";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Slider from "./components/slider";

import Footer from "./components/footer";
import Skills from "./components/skills";

function App() {
  const [state, setState] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setState(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [state]);

  return (
    <div className="App">
      <Portada />
      <NavBar isScrolling={state} />
      <About />
      <Skills />
      <Slider />

      <Footer />
    </div>
  );
}

export default App;
