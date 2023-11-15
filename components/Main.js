import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-[#ABB2B9]">
            Let's grow your business
          </p>
          <h1 className="py-4 text-gray-300">
            Hi, I'm <span className="text-[#008080]">Kanji</span>
          </h1>
          <h1 className="py-2 text-gray-300">I'm a Web | Software Developer</h1>
          <p className="py-4 text-gray-300 max-w-[70%]  m-auto">
            Fully committed to creating innovative solutions that will grow your
            business. Outside of developing applications, I'm focused on
            learning new technologies that will take my skills to the next
            level.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-950  p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
              <FaLinkedinIn />
            </div>{" "}
            <div className="rounded-full shadow-lg shadow-gray-950  p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
              <FaGithub />
            </div>{" "}
            <div className="rounded-full shadow-lg shadow-gray-950  p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
              <FaInstagram />
            </div>{" "}
            <div className="rounded-full shadow-lg shadow-gray-950  p-8 cursor-pointer hover:scale-125 ease-in duration-300 mr-8">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
