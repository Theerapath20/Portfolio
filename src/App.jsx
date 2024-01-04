import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default App;
