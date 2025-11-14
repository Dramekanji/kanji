import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-40 px-8 md:px-16 lg:px-20 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-section-mobile md:text-section font-medium mb-16">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="text-xl font-medium mb-6">Frontend</h3>
            <p className="text-lg text-gray-dark leading-relaxed">
              React • Next.js • TypeScript • JavaScript • Tailwind CSS • HTML • CSS
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Backend & Database</h3>
            <p className="text-lg text-gray-dark leading-relaxed">
              Node.js • Supabase • MongoDB
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Tools & Version Control</h3>
            <p className="text-lg text-gray-dark leading-relaxed">
              Git • GitHub
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">Mobile Development</h3>
            <p className="text-lg text-gray-dark leading-relaxed">
              React Native
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
