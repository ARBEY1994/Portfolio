import React from "react";
import Portada from "./Portada";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./skills";
import Slider from "./slider";
import Footer from "./footer";
import Raya from "./raya";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Portada />
      <About />
      <Raya />
      <Skills />
      <Raya />
      <Slider />
      <Footer />
    </div>
  );
};
export default Home;
