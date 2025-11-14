import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/utils/motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-32 md:py-40 px-8 md:px-16 lg:px-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.h2
          className="text-section-mobile md:text-section font-medium mb-16"
          variants={fadeInUp}
        >
          Tech Stack
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-16"
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-medium mb-6">Frontend</h3>
            <p className="text-lg text-gray-dark leading-relaxed">
              React • Next.js • TypeScript • JavaScript • Tailwind CSS • HTML • CSS
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-medium mb-6">Backend & Database</h3>
            <p className="text-lg text-gray-dark leading-relaxed">
              Node.js • Supabase • MongoDB
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-medium mb-6">Tools & Version Control</h3>
            <p className="text-lg text-gray-dark leading-relaxed">
              Git • GitHub
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-medium mb-6">Mobile Development</h3>
            <p className="text-lg text-gray-dark leading-relaxed">
              React Native
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
