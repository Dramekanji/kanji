import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/utils/motion";
import useSectionAnimation from "@/hooks/useSectionAnimation";

const About = () => {
  const { ref, controls } = useSectionAnimation();

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-32 md:py-40 px-8 md:px-16 lg:px-20"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      <div className="max-w-[900px] mx-auto">
        <motion.h2
          className="text-section-mobile md:text-section font-medium mb-16"
          variants={fadeInUp}
        >
          About
        </motion.h2>

        <motion.div
          className="space-y-6 text-lg md:text-xl leading-relaxed"
          variants={staggerChildren}
        >
          <motion.p className="text-gray-dark" variants={fadeInUp}>
            I&apos;m Dramé Kanji, a filmmaker transitioning into the tech world.
          </motion.p>

          <motion.p className="text-gray-dark" variants={fadeInUp}>
            As a Director of Photography turned Developer, I blend the art of filmmaking with the dynamic world of technology. My journey began behind the camera, where I developed the craft of visual storytelling, directing, and production. This experience honed my eye for detail and passion for creating compelling narratives.
          </motion.p>

          <motion.p className="text-gray-dark" variants={fadeInUp}>
            Now, as I pivot into the tech industry, I bring with me a unique perspective shaped by my cinematic background. My goal is to merge the creativity of filmmaking with the precision of technology to develop unique digital experiences. Whether it&apos;s through coding, designing, or problem-solving, I am dedicated to exploring the limitless possibilities that the fusion of these two worlds offers.
          </motion.p>

          <motion.p className="text-gray-dark" variants={fadeInUp}>
            Join me on this exciting journey as I navigate the tech world, bringing my touch of creativity to your projects.
          </motion.p>

          <motion.div className="pt-8" variants={fadeInUp}>
            <Link
              href="#projects"
              className="inline-flex items-center text-black hover:opacity-70 transition-opacity font-medium"
            >
              View my work →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
