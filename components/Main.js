import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center px-8 md:px-16 lg:px-20"
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Main Greeting */}
            <div>
              <h1 className="text-display-mobile md:text-display-tablet lg:text-display font-medium leading-none tracking-tight">
                Hi, I&apos;m
              </h1>
              <h1 className="text-display-mobile md:text-display-tablet lg:text-display font-medium leading-none tracking-tight">
                Kanji
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-dark max-w-lg">
              Full Stack Developer
            </p>

            <p className="text-base md:text-lg text-gray-dark max-w-lg leading-relaxed">
              From Director of Photography to Developer, solving problems with
              the power of technology.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
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
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 hidden lg:block">
              <p className="text-sm text-gray-dark">Scroll down ↓</p>
            </div>
          </div>

          {/* Right: Portrait Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              {/* Outer decorative circle */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-border"></div>

              {/* Middle decorative circle */}
              <div className="absolute inset-8 rounded-full border-2 border-gray-border"></div>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
