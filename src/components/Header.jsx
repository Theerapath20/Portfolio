import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialGithub,
} from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import web from "../assets/web.pdf";


function Header() {

  const [mail, setMail] = useState("theerapathnpm555@gmail.com");

  const nav = [
    { name: "HOME", href: "/" },
    { name: "ME", href: "#about" },
    { name: "SKILL", href: "#skill" },
    { name: "PROJECT", href: "#project" },
    { name: "CONTACT", href: "#contact" },
  ];

 


  return (
    <div className=" text-lg text-white h-dvh flex-row opacity-90  bg-left bg-[url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
      <div className="flex  justify-around">
        <div className="sm:w-4/12 pt-5 ml-6 ">
          <a
            href="/"
            className=" font-carattere text-3xl sm:text-5xl text-sky-400"
          >
            Theerapath
          </a>
        </div>
        <div className="flex">
          <div className="sm:w-4/12 pt-8 space-x-5 hidden md:flex  ">
            {nav.map((item, i) => {
              return (
                <a
                  className="hover:underline hover:decoration-sky-400 hover:underline-offset-4  "
                  key={i}
                  href={item.href}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
        <div className="sm:w-4/12 mt-5 pr-5 flex justify-end ">
          <a
            className=" font-Allerta 
              rounded-md sm:px-3 px-2 hover:opacity-70 block text-sm sm:text-md sm:pt-3 pt-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 border-2 hover:border-4 hover:border-sky-300  "
            href={web}
            download="Portfolio Theerapath"
            target="_blank"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center  font-Zen  h-dvh  ">
        {/* <p className="sm:text-6xl text-3xl p-3 text-sky-400 ">{name}</p> */}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Theerapath Chaicharoen",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Theerapath Chaicharoen",
            1000,
            "Theerapath Chaicharoen",
            1000,
            "Theerapath Chaicharoen",
            1000,
          ]}
          wrapper="span"
          speed={0}
          className="sm:text-6xl text-3xl p-3 text-sky-400"
          repeat={Infinity}
        />
        <p className="mt-3 sm:text-2xl">I AM DEVELOPER</p>
        <div className="flex space-x-3   justify-center mt-5 sm:text-xl text-md">
          <a
            href="https://github.com/Theerapath20"
            target="_blank"
            className="border rounded-full p-2 hover:bg-slate-800"
          >
            <SlSocialGithub />
          </a>
          <a href="" className="border rounded-full p-2 hover:bg-slate-600">
            <SlSocialLinkedin />
          </a>
          <a
            href="https://www.facebook.com/teerapath.chaicharoen"
            target="_blank"
            className="border rounded-full p-2 hover:bg-blue-600"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/thee_theerapath/"
            target="_blank"
            className="border rounded-full p-2 hover:bg-pink-600"
          >
            <SlSocialInstagram />
          </a>
          <a href="" className="border rounded-full p-2 hover:bg-red-800">
            <CiMail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header