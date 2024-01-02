import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";


function App() {
  return (
    <>
      <Header />
      <div className=" absolute w-1/2 bg-red-500 fill-neutral-600" />
      <About />
    </>
  );
}

export default App;
