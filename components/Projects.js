import React from "react";
import mansa from "../public/projects/mansa.png";
import rcvr from "../public/projects/rcvr.png";
import kfdecor from "../public/projects/kfdecor.png";
import vdc from "../public/projects/vdc.png";
import mvmnt from "../public/projects/mvmnt.png";
import akwaba from "../public/projects/akwaba.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className="py-32 md:py-40 px-8 md:px-16 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-section-mobile md:text-section font-medium mb-16">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <ProjectItem
            title="Mansa Nzinga"
            backgroundImg={mansa}
            projectUrl="https://mansa-orpin.vercel.app/"
          />
          <ProjectItem
            title="RCVR"
            backgroundImg={rcvr}
            projectUrl="https://rcvr-landing.vercel.app"
          />
          <ProjectItem
            title="K&F Décor"
            backgroundImg={kfdecor}
            projectUrl="https://kfdecor.vercel.app/"
          />
          <ProjectItem
            title="VDC"
            backgroundImg={vdc}
            projectUrl="https://vdc-app-226c.vercel.app/"
          />
          <ProjectItem
            title="MVMNT"
            backgroundImg={mvmnt}
            projectUrl="https://mvmnt-delta.vercel.app/"
          />
          <ProjectItem
            title="Akwaba"
            backgroundImg={akwaba}
            projectUrl="https://akwaba-gamma.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
