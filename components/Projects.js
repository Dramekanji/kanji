import React from "react";
import Image from "next/image";
import mansa from "../public/projects/mansa.png";
import maf2 from "../public/projects/maf2.png";
import vdc from "../public/projects/vdc.png";
import nour from "../public/projects/nour.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#008080]">
          My Projects
        </p>
        <h2 className="py-4 text-gray-300">Apps I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Mansa Nzinga"
            backgroundImg={mansa}
            projectUrl="/mansa"
          />
          <ProjectItem
            title="Maf Village"
            backgroundImg={maf2}
            projectUrl="/maf"
          />
          <ProjectItem
            title="VDC Telecom"
            backgroundImg={vdc}
            projectUrl="/vdc"
          />
          <ProjectItem
            title="Nour Light "
            backgroundImg={nour}
            projectUrl="/mansa"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
