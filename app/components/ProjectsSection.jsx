import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./Projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative min-h-screen">
      <div className="absolute -top-8 -left-4 bg-purple-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 -right-3 bg-yellow-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 -left-30 bg-pink-300 rounded-full  w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>
      <div className="absolute bottom-0 right-20 bg-purple-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 bg-orange-300 rounded-full  w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 bg-pink-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-1 xl:gap-16 sm:py-16 xl:px-16">
        <h2 className="mt-4 mb-6 text-4xl font-bold text-center text-blue-700">
          My Portfolio
        </h2>
        <div className="grid items-start gap-12 md:grid-cols-3 ">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
