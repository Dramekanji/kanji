import Image from "next/image";
import React from "react";
import mansa from "../public/projects/mansa.png";
import { FaRegCircle } from "react-icons/fa";
import Link from "next/link";

const mansaPage = () => {
  return (
    <div className="w-full ">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={mansa}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Property Finders</h2>
          <h3>Next JS / Tailwind</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="py-4">Project</p>
          <h2 className="py-4 text-[#008080]">Overview</h2>
          <p>
            {" "}
            {/* eslint-disable react/no-unescaped-entities */}
            This app is was built with Next JS and hosted on Vercel. It's for
            Mansa Nzinga, an independent film production company based in Los
            Angeles, Califoria. This app allows for customers who are interested
            in working with Mansa Nzinga to see their previous work and also get
            in touch with them in order to work with them.{" "}
            {/* eslint-enable react/no-unescaped-entities */}
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[#008080] py-2 flex items-center">
                <FaRegCircle className="pr-1 mr-2" /> Next JS
              </p>
              <p className="text-[#008080] py-2 flex items-center">
                <FaRegCircle className="pr-1 mr-2" /> Tailwind
              </p>
              <p className="text-[#008080] py-2 flex items-center">
                <FaRegCircle className="pr-1 mr-2" /> JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mansaPage;
