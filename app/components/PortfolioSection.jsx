import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./Projects";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative min-h-screen">
      <div className="absolute top-0 bg-purple-300 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 bg-yellow-300 rounded-full -right-3 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bg-pink-300 rounded-full -bottom-8 -left-30 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-1 xl:gap-16 sm:py-16 xl:px-16">
        <h2 className="mt-4 mb-6 text-4xl font-bold text-center text-blue-700">
          My Portfolio
        </h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="grid items-start gap-12 md:grid-cols-3 ">
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
          <div className="">
            <a href="/projects">
              <button className="w-full sm:w-fit items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
                <span className="block px-5 py-2 transition-all duration-75 ease-in bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  View More
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
