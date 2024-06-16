import React from "react";
import { Paragraph } from "../common";
import { ProjectsData } from "../../Data/ProjectsData";

import ProjectBoxUpdated from "./ProjectBoxUpdated";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="lg:mx-56 md:px-40 px-16 flex gap-16 flex-col relative"
    >
      <div className="flex flex-col gap-8">
        <h2 className="text-white text-4xl font-bold text-center">Projects</h2>
        <Paragraph text="I really enjoy building side projects on my spare time. Experimenting with various technologies." />
      </div>
      <div className="flex flex-col lg:gap-40 gap-20 z-40">
        {ProjectsData.map((project, index) => (
          <ProjectBoxUpdated project={project} key={index} />
        ))}
      </div>
      <div className="absolute bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 rounded-full w-96 h-96 bottom-16 right-16 blur-3xl opacity-30"></div>
      <div className="absolute bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 rounded-full w-96 h-96 top-16 left-16 blur-3xl opacity-10"></div>
    </section>
  );
};
