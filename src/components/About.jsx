import React, { useState } from 'react'
import dataAbout from "./aboutData/aboutData.json"

import Skill from './Skill';



function About() {

     

   
     
     const [aboutData, setAboutData] = useState(dataAbout)
     const [value ,setValue] = useState(0)
     const { head, me, skill } = aboutData[value];
     


     

     
       
  return (
    <div
      className="flex flex-col lg:flex lg:flex-row  bg-black text-white  relative "
      id="about"
      // data-aos="fade-left"
      // data-aos-duration="3000"
    >
      <div className="absolute bottom-8 right-0 font-Allerta   ">
        <p className="sm:text-9xl hidden md:block -rotate-90  p-3 text-white animate-pulse   ">
          ME
        </p>
      </div>
      <div className="lg:w-1/3  flex flex-col justify-center items-center  m-auto  ">
        <div className=" p-3 ">
          <div className="flex justify-center">
            <div className=" md:absolute relative lg:border-8 lg:border-sky-400 lg:top-20 xl:bottom-20 lg:left-12 sm:rounded-xl  lg:h-[50%] xl:h-[70%] lg:w-1/4 ">
              <p className="text-white"></p>
            </div>
            <img
              className=" lg:absolute relative w-1/2  lg:w-1/4 lg:top-[12%]   lg:mt-5 shadow-md shadow-sky-400  border-black rounded-lg"
              src="public/img/me.jpg"
            />
            {/* <div className=" absolute  bg-pink-500 blur-3xl  h-80 w-80 bottom-0  " /> */}
          </div>
        </div>
      </div>

      <div className="lg:w-3/5 p-4 lg:p-0   lg:my-10 sm:flex  lg:mr-10   ">
        <div className="text-white lg:mt-5 flex flex-col font-sans    ">
          {me.map((item, i) => {
            return (
              <>
                <div className="  ">
                  <p className="sm:text-md p-3 text-slate-500  ">
                    {item.about}
                  </p>
                </div>
                <div className="flex flex-col  p-6 space-y-6">
                  <div className="flex sm:space-x-20 text-sky-400 ">
                    <p>Name</p>
                    <p className="px-2 text-slate-500">{item.name}</p>
                  </div>
                  <div className="flex sm:space-x-20 text-sky-400  ">
                    <p>Age</p>
                    <p className="px-7 text-slate-500">{item.age}</p>
                  </div>
                  <div className="flex space-x-20 text-sky-400  ">
                    <p>Address</p>
                    <p className="px-1 text-slate-500">{item.address}</p>
                  </div>
                  <div className="flex space-x-8 text-sky-400 ">
                    <p>Phone Number</p>
                    <p className="text-slate-500">{item.phone}</p>
                  </div>
                  <div className="flex space-x-8 text-sky-400 ">
                    <p className="">My motto</p>
                    <p className="px-9 text-slate-500">
                      Today is hard, tomorrow will be worse but the day after
                      tomorrow will be sunshine
                      <p className="text-center">- Jack Ma -</p>
                      {/* Loyal, Generous, Diligent, understanding, flexible,
                      patient */}
                    </p>
                  </div>
                  <div className="flex space-x-8 text-sky-400 ">
                    <p>Language</p>
                    <p className="px-9 text-slate-500">
                      {item.language1} (native)
                    </p>
                  </div>
                  <div className="flex space-x-8 ">
                    <p className="text-black">Language</p>
                    <p className="px-9 text-slate-500">
                      {item.language2} (A2 Elementary of EF SET )
                    </p>
                  </div>

                  <div className="flex ml-5 space-x-10  ">
                    <p className="text-black">Image</p>
                    <div className=" sm:flex sm:flex-row flex flex-col   ">
                      <img
                        className="p-1 sm:w-1/4 hover:w-1/3 border-black rounded-lg "
                        src={item.img}
                        alt=""
                      />
                      <img
                        className="sm:w-1/2 hover:w-1/2 p-1 border-black rounded-lg  "
                        src={item.img2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About