import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
