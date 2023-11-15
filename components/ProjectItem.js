import React from "react";
import Image from "next/image";
import mansa from "../public/projects/mansa.png";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#000] to-[#000]">
        <Image
          className="round-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl tracking-wider text-center mb-6">{title}</h3>
          <p className="pb-4 pt-2 text-gray-300 text-center">Next JS</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-[#008080] hover:bg-[#263238] text-white font-bold text-lg cursor-pointer">
              See More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
