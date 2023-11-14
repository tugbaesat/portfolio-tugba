import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./Projects";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative min-h-screen pt-6">
      <div class="hidden md:block">
        <div class="absolute top-1/3 left-10 bg-yellow-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000 pointer-events-none"></div>
        <div class="absolute bottom-5 right-1/4 bg-blue-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000 pointer-events-none"></div>
        <div class="absolute top-5 right-24 bg-orange-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-8000 pointer-events-none"></div>
      </div>
      <div class="md:hidden absolute top-1/4 right-1/4 bg-blue-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
      <div className="items-center justify-center gap-8 px-4 py-8 md:grid md:grid-cols-1 xl:gap-16 sm:py-16 xl:px-16">
        <h2 className="mt-4 mb-6 text-4xl font-bold text-center text-blue-700">
          My Portfolio
        </h2>
        <div >
          <div className="md:grid md:grid-cols-3 flex flex-col items-center justify-center gap-4">
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
              className="w-full sm:w-fit items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800"
            >
              <span className="block px-5 py-2 transition-all duration-75 ease-in bg-gray-50 bg-opacity-50 rounded-full group-hover:bg-opacity-0">
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
