import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#008080]">
            About
          </p>
          <h2 className="py-4 text-gray-300">A Bit About Me</h2>
          <p className="py-2 text-gray-300">From Film to Code</p>
          <p className="py-2 text-gray-300">
            I'm Dramé Kanji, a filmmaker moving into the tech world.{" "}
          </p>
          <p className="py-2 text-gray-300">
            I'm a Director of Photography turned Developer, blending the art of
            filmmaking with the dynamic world of technology. My journey began
            behind the camera, where I developed the craft of visual
            storytelling, directing, and production. This experience honed my
            eye for detail and passion for creating compelling narratives.
          </p>
          <p className="py-2 text-gray-300">
            Now, as I pivot into the tech industry, I bring with me a unique
            perspective shaped by my cinematic background. My goal is to merge
            the creativity of filmmaking with the precision of technology to
            develop unique digital experiences. Whether it's through coding,
            designing, or problem-solving, I am dedicated to exploring the
            limitless possibilities that the fusion of these two worlds offers.
          </p>
          <p className="py-2 text-gray-300">
            Join me on this exciting journey as I navigate the tech world,
            bringing my touch of creativity to your projects.
          </p>
          <Link href="#projects">
            <p className="py-2 text-gray-300 underline cursor-pointer">
              Take a look at some of my projects.
            </p>
          </Link>
        </div>
        <div className="w-full bg-[#008080] h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/images/kanjidevpp.JPG"
            alt="/"
            width={300}
            height={200}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
