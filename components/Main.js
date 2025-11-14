import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerChildren } from "@/utils/motion";

const Main = () => {
  return (
    <motion.section
      id="home"
      className="mobile-screen min-h-screen flex items-center px-8 md:px-16 lg:px-20"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div className="space-y-8" variants={staggerChildren}>
            {/* Main Greeting */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-display-mobile md:text-display-tablet lg:text-display font-medium leading-none tracking-tight">
                Hi, I&apos;m
              </h1>
              <h1 className="text-display-mobile md:text-display-tablet lg:text-display font-medium leading-none tracking-tight">
                Kanji
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-dark max-w-lg"
              variants={fadeInUp}
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-gray-dark max-w-lg leading-relaxed"
              variants={fadeInUp}
            >
              From Director of Photography to Developer, solving problems with
              the power of technology.
            </motion.p>

            {/* Social Links */}
            <motion.div className="flex items-center gap-6 pt-4" variants={fadeInUp}>
              <Link
                href="https://www.linkedin.com/in/dram%C3%A9-kanji-francina-443ba792/"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </Link>
              <Link
                href="https://github.com/Dramekanji"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:opacity-70 transition-opacity"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/kanjifrancina"
                rel="noopener noreferrer"
                target="_blank"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="#contact"
                className="hover:opacity-70 transition-opacity"
                aria-label="Email"
              >
                <AiOutlineMail size={24} />
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div className="pt-12 hidden lg:block" variants={fadeInUp}>
              <p className="text-sm text-gray-dark">Scroll down ↓</p>
            </motion.div>
          </motion.div>

          {/* Right: Portrait Photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={scaleIn}
          >
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              {/* Outer decorative circle */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gray-border"
              >
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black" />
              </motion.div>

              {/* Outer orbiting circle */}
              <motion.div
                className="absolute inset-[-24px] rounded-full border-2 border-gray-border/70"
              >
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-black" />
              </motion.div>

              {/* Inner circle with image */}
              <div className="absolute inset-8 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/kanji-portrait.png"
                  alt="Kanji - Full Stack Developer"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Main;
