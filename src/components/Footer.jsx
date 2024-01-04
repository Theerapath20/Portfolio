import React from 'react'
import { FaFacebookF, FaArrowUp } from "react-icons/fa";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialGithub,
} from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import web from "../assets/web.pdf";

function Footer({nav}) {
  return (
    <section className=" bg-slate-700 p-10">
      <div className="  flex flex-col sm:flex sm:flex-row   justify-center space-y-2    space-x-8   ">
        {nav.map((item) => {
          return (
            <div className="flex space-x-2  text-xl mx-8 sm:m-2  ">
              <div className="mt-1 text-sky-400">{item.pic}</div>
              <a
                className=" text-white hover:underline hover:decoration-sky-400 hover:underline-offset-4  "
                href={item.href}
              >
                <p>{item.name}</p>
              </a>
            </div>
          );
        })}
      </div>
      <div className="sm:flex sm:flex-row flex flex-col justify-center space-x-4  my-8">
        <div className="flex space-x-5 justify-center m-4   ">
          <a
            className=" font-Allerta text-white 
              rounded-md  p-2 hover:opacity-70 block text-sm sm:text-md sm:pt-2 pt-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 border-2 hover:border-4 hover:border-sky-300  "
            href={web}
            download="Theerapath's CV "
            target="_blank"
          >
            DOWNLOAD CV
          </a>
          <span className="border-r hidden sm:block"></span>
        </div>
        <div className="mt-5">
          <div className="flex space-x-3   justify-center  sm:text-xl text-md text-white ">
            <a
              href="https://github.com/Theerapath20"
              target="_blank"
              className="border rounded-full p-2 bg-slate-800 hover:opacity-75"
            >
              <SlSocialGithub />
            </a>
            <a
              href=""
              className="border rounded-full p-2 bg-slate-600 hover:opacity-75 "
            >
              <SlSocialLinkedin />
            </a>
            <a
              href="https://www.facebook.com/teerapath.chaicharoen"
              target="_blank"
              className="border rounded-full p-2 bg-blue-600 hover:opacity-75"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/thee_theerapath/"
              target="_blank"
              className="border rounded-full p-2 bg-pink-600 hover:opacity-75"
            >
              <SlSocialInstagram />
            </a>
            <a
              href="#contact"
              className="border rounded-full p-2 bg-red-800 hover:opacity-75"
            >
              <CiMail />
            </a>
          </div>
        </div>
      </div>
      <div className="border border-black mx-10   "></div>
      <div className="flex justify-center my-5  p-5 text-sm  ">
        <a className=" border  rounded-full animate-bounce  " href="#home">
          <FaArrowUp className=" m-1  text-white" />
        </a>
        <div className="border-r ml-5"></div>
        <div className="mt-1">
          <p className="ml-5 text-white  "> Create By Theerapath</p>
        </div>
        
      </div>
    </section>
  );
}

export default Footer