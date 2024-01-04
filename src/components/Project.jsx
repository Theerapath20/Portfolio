import React, { useState } from "react";
import projectData from '../components/aboutData/projectData.json'

function Project() {
    
   const allCategory = ["all", ...new Set(projectData.map((item) => item.category))];

   const [category, setCategory] = useState(allCategory);
   const [menu, setMenu] = useState(projectData);
   const [value, setValue] = useState(0);

   const filterItem = (category) => {
     if (category === "all") {
       return setMenu(projectData);
     }
     const newItem = projectData.filter((item) => item.category === category);
     setMenu(newItem);
   };


  // handle mouse enter
  const handleMouseEnter = (e) => {
    const vid = e.target;
    vid.muted = true;
    vid.play();
  };
  // handle mouse leave
  const handleMouseLeave = (e) => {
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
  };
  return (
    <section className="bg-black text-white " id="project">
      <div className="p-3 py-5 text-9xl font-Allerta text-center animate-pulse hidden md:block">
        Project
      </div>

      <div className="  flex justify-center space-x-5  p-3  ">
        {
          category.map((category,i) => {
            return (
              <div
                className={`mt-5 sm:p-3 w-fit border-2 rounded-lg bg-slate-600 hover:bg-blue-300 ${
                  i === value &&
                  `bg-blue-300 transition ease-in-out delay-150   -translate-y-3 shadow-lg shadow-slate-400`
                }`}
              >
                <button
                  className={`sm:px-5 px-1  font-Allerta md:text-xl    transition ease-in-out delay-150  `}
                  key={i}
                  onClick={() => {
                    filterItem(category);
                    setValue(i);
                  }}
                >
                  {category}
                </button>
              </div>
            );
          })
        }
      </div>

      <div className="flex justify-center   ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-5   ">
          {menu.map((item, i) => {
            return (
              <div>
                <button
                  className="border-black rounded-xl   "
                  target="_blank"
                  key={i}
                >
                  <video
                    width="420"
                    height="400"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className=" bg-slate-800 hover:opacity-100 opacity-90 py-8 px-4  "
                    to
                  >
                    <source
                      className="border rounded-lg"
                      src={item.video}
                      type="video/mp4"
                    />
                  </video>
                </button>
                <div className="mt-3">
                  <p className="text-2xl font-Allerta">{item.name}</p>
                  <a className="text-sm text-sky-400 font-semibold" href={item.to} target="_blank">{item.view}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project