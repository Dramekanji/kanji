import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <Link href={projectUrl} rel="noopener noreferrer" target="_blank" className="group block">
      <div className="border border-gray-border rounded-xl overflow-hidden hover:border-black transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-video bg-gray-light">
          <Image
            src={backgroundImg}
            alt={title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-medium group-hover:opacity-70 transition-opacity">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
