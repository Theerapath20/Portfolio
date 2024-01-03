import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";


function App() {
  return (
    <>
      <Header />
      <About />
      <Skill />
      <Project />
    </>
  );
}

export default App;
