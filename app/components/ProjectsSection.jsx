import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./Projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative min-h-screen">
      <div class="hidden md:block">
        <div class="absolute top-5 left-5 bg-yellow-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000 pointer-events-none"></div>
        <div class="absolute bottom-5 right-1/2 bg-blue-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000 pointer-events-none"></div>
        <div class="absolute top-5 left-1/2 bg-purple-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-7000 pointer-events-none"></div>
        <div class="absolute bottom-5 right-5 bg-pink-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-8000 pointer-events-none"></div>
      </div>
      <div class="md:hidden absolute top-1/4 right-1/4 bg-pink-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
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
