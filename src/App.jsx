import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaHouse } from "react-icons/fa6";
import { IoPersonSharp, IoChatbubbleEllipses } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";

import { MdWork } from "react-icons/md";


function App() {

    const nav = [
      { name: "HOME", href: "/", pic: <FaHouse /> },
      { name: "ME", href: "#about", pic: <IoPersonSharp /> },
      { name: "SKILL", href: "#skill", pic: <RiComputerFill /> },
      { name: "PROJECT", href: "#project", pic: <MdWork /> },
      { name: "CONTACT", href: "#contact", pic: <IoChatbubbleEllipses /> },
    ];
  return (
    <>
      <Header nav={nav} />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer nav={nav} />
    </>
  );
}

export default App;
