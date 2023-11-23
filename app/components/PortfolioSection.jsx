import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./Projects";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative min-h-screen pt-6">
      <div className="hidden md:block">
        <div className="absolute top-[%10] left-10 bg-pinkOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000 pointer-events-none"></div>
        <div className="absolute bottom-5 right-1/4 bg-blueOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000 pointer-events-none"></div>
        <div className="absolute top-5 right-24 bg-purpleOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-8000 pointer-events-none"></div>
      </div>
      <div className="md:hidden absolute top-1/4 right-1/4 bg-blueOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
      <div className="items-center justify-center gap-8 px-4 py-8 md:grid md:grid-cols-1 xl:gap-16 sm:py-16 xl:px-16">
        <h2 className="mt-4 mb-6 text-4xl font-bold text-center text-darkPurple uppercase">
          My Portfolio
        </h2>
        <div>
          <div className="md:grid md:grid-cols-3 flex flex-col items-center justify-center gap-6 px-4">
            {projectData.slice(0, 3).map((project) => (
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
          <div className="flex justify-center items-center mt-6 text-center">
            <Link
              href="/projects"
              className="w-full sm:w-fit items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-purpleOne to-pinkOne group-hover:from-purpleOne group-hover:to-pinkOne text-purpleTwo focus:ring-4 focus:outline-none focus:ring-purpleOne"
            >
              <span className="block px-5 py-2 transition-all duration-75 ease-in bg-pinkOne bg-opacity-50 rounded-full group-hover:bg-opacity-0">
                View More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
