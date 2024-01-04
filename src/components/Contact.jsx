import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function Contact() {
  return (
    <section className="bg-black pt-5" id="contact">
      <div className="  font-Allerta       ">
        <div className="sm:text-9xl  hidden md:block text-center   text-white animate-pulse ">
          CONTACT
        </div>
      </div>
      <div className="bg-black text-white sm:p-1 flex justify-center   ">
        <div className="flex flex-col justify-center md:flex md:flex-row  w-3/4 my-5  opacity-90 shadow-lg shadow-slate-300    rounded-xl bg-slate-900 hover:opacity-100   ">
          <div className="w-full mt-5 p-5 ">
            <h2 className=" py-3 sm:text-4xl text-2xl font-semibold">
              Get In Touch
            </h2>
            <div className=" sm:w-fit ">
              <p className="md:text-lg sm:w-3/4 text-xs  ">
                I'm Very Happy If You're Interested In Me And Would Like To
                Speak With Me. Feel Free To Call, Send Me An Email, Follow Me On
                Social Media Or Simply Complete The Inquiry Form.
              </p>
              <div className="flex flex-col  mt-5 sm:text-xl p-3 font-light font-mono ">
                <div className="flex  space-x-3 mt-5  ">
                  <FaPhoneAlt className="bg-sky-500 border rounded-full h-fit w-fit p-3 mb-5 " />
                  <span className="text-ms sm:text-lg mt-3 ">+66 99-647-4252</span>
                </div>
                <div className="sm:flex space-x-3  mt-5 hidden   ">
                  <CiMail className="bg-sky-500 border rounded-full w-fit h-fit  p-3 " />
                  <span className=" text-ms sm:text-lg mt-3   ">
                    theerapathnpm555@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-3/4 mt-5  sm:p-5 text-center md:text-left ">
            <p className="sm:text-2xl text-xl font-Allerta md:px-5  ">
              Send me a massage
            </p>
            <form className="mt-3 p-3  flex flex-col space-y-5 r  ">
              <input
                className="px-5 py-1 border rounded-lg opacity-75 md:w-4/5    text-black  "
                type="text"
                placeholder="Name"
              />
              <input
                className="px-5 py-1 border rounded-lg opacity-75 md:w-4/5  text-black  "
                type="email"
                placeholder="Email Address"
              />
              <textarea
                className="px-5 py-2 border rounded-lg opacity-75 md:w-4/5  h-1/2  text-black   "
                type="text"
                placeholder="Your Massage"
                rows="10"
                cols="60"
              />
              <input
                className="border rounded-xl px-5 py-1 w-fit bg-sky-400 hover:opacity-80 font-bold font-Allerta   "
                type="submit"
                value="Send Massage"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact