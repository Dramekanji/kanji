import React from "react";
import mansa from "../public/projects/mansa.png";
import rcvr from "../public/projects/rcvr.png";
import kfdecor from "../public/projects/kfdecor.png";
import vdc from "../public/projects/vdc.png";
import mvmnt from "../public/projects/mvmnt.png";
import akwaba from "../public/projects/akwaba.png";
import { motion } from "framer-motion";

import ProjectItem from "./ProjectItem";
import { fadeInUp, staggerChildren } from "@/utils/motion";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-32 md:py-40 px-8 md:px-16 lg:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          className="text-section-mobile md:text-section font-medium mb-16"
          variants={fadeInUp}
        >
          Selected Work
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <ProjectItem
              title="Mansa Nzinga"
              backgroundImg={mansa}
              projectUrl="https://mansa-orpin.vercel.app/"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectItem
              title="RCVR"
              backgroundImg={rcvr}
              projectUrl="https://rcvr-landing.vercel.app"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectItem
              title="K&F Décor"
              backgroundImg={kfdecor}
              projectUrl="https://kfdecor.vercel.app/"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectItem
              title="VDC"
              backgroundImg={vdc}
              projectUrl="https://vdc-app-226c.vercel.app/"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectItem
              title="MVMNT"
              backgroundImg={mvmnt}
              projectUrl="https://mvmnt-delta.vercel.app/"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectItem
              title="Akwaba"
              backgroundImg={akwaba}
              projectUrl="https://akwaba-gamma.vercel.app/"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
