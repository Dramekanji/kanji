import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-32 md:py-40 px-8 md:px-16 lg:px-20">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-section-mobile md:text-section font-medium mb-16">
          About
        </h2>

        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <p className="text-gray-dark">
            I'm Dramé Kanji, a filmmaker transitioning into the tech world.
          </p>

          <p className="text-gray-dark">
            As a Director of Photography turned Developer, I blend the art of filmmaking with the dynamic world of technology. My journey began behind the camera, where I developed the craft of visual storytelling, directing, and production. This experience honed my eye for detail and passion for creating compelling narratives.
          </p>

          <p className="text-gray-dark">
            Now, as I pivot into the tech industry, I bring with me a unique perspective shaped by my cinematic background. My goal is to merge the creativity of filmmaking with the precision of technology to develop unique digital experiences. Whether it's through coding, designing, or problem-solving, I am dedicated to exploring the limitless possibilities that the fusion of these two worlds offers.
          </p>

          <p className="text-gray-dark">
            Join me on this exciting journey as I navigate the tech world, bringing my touch of creativity to your projects.
          </p>

          <div className="pt-8">
            <Link
              href="#projects"
              className="inline-flex items-center text-black hover:opacity-70 transition-opacity font-medium"
            >
              View my work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
