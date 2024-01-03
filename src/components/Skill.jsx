import React, { useState } from 'react'
import skillData from '../components/aboutData/skillData.json'


function Skill() {


  const [show,setShow] = useState(true)

  

  
  return (
    <section className="bg-black w-full  relative" id='skill'>
      <div className="text-white w-1/6 absolute top-10 ">
        <div className="text-9xl font-Allerta  pt-8 rotate-90 hidden md:block animate-pulse text-white p-5 ">
          SKILL
        </div>
      </div>
      <div className="flex justify-center text-center  ">
        <div className=" grid grid-cols-1 sm:grid-cols-4 gap-6 px-6 mt-5   w-2/3 ">
          {skillData.map((item, i) => {
            return (
              <div
                key={i}
                className="  border-4 border-slate-700 rounded-xl flex flex-col justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 "
              >
                <img
                  className="px-3 py-3   "
                  src={item.pic}
                  alt=""
                  style={{ maxHeight: "160px" }}
                  onMouseEnter={() => setShow(!show)}
                  onMouseOut={() => setShow(false)}
                />
                <div>
                  <p className="text-white py-2">{item.name}</p>
                </div>
                {show ? (
                  <div className="border border-none rounded-xs bg-slate-700 px-3 text-white">
                    <div>
                      <span>{item.skill}</span>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skill