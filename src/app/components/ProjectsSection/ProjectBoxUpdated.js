import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectBoxUpdated = ({ project }) => {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-96">
          <h2 className="text-4xl font-bold">{project.name}</h2>
          <p>{project.paragraphTxt}</p>
          <div className="flex gap-4 mt-4 max-w-96 flex-wrap">
            {project.technologies.map((tech, index) => (
              <span className="px-4 py-2 bg-gray-950 z-40 rounded-full w-fit">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Link
          className="w-fit  bg-gradient-to-r hover:bg-gradient-to-l from-purple-500 via-purple-700 to-purple-900 px-12 py-2 text-lg rounded-full shadow-[0_5px_16px_rgba(75,_0,_130,_0.7)] hover:shadow-[0_9px_32px_rgba(75,_0,_130,_0.7)] "
          href={project.github}
        >
          Code
        </Link>
      </div>
      <Image
        src={project.image}
        width={480}
        height={320}
        alt="swift cover"
        className="rounded-lg"
      />
    </div>
  );
};

export default ProjectBoxUpdated;
