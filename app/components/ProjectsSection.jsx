"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./Projects";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ProjectsSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0.25%", "-91.5%"]);

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative min-h-screen pt-6 my-10"
    >
      <div className="hidden md:block">
        <div className="absolute top-5 left-5 bg-pinkOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000 pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/2 bg-blueOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000 pointer-events-none"></div>
        <div className="absolute top-[30%] right-[20%] bg-purpleOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-7000 pointer-events-none"></div>
        <div className="absolute bottom-5 right-5 bg-pinkOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-8000 pointer-events-none"></div>
        <div className="absolute bottom-5 left-5 bg-purpleTwo rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-8000 pointer-events-none"></div>
      </div>
      <div className="md:hidden absolute top-[20%] right-[25%] bg-pinkOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
      <div className="md:hidden absolute bottom-[20%] left-[25%] bg-greenOne rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
      <h2 className="mt-4 mb-6 text-4xl font-bold text-center text-darkPurple uppercase">
        My Portfolio
      </h2>

      <div className="md:grid md:grid-cols-3 flex flex-col items-center justify-center gap-6 px-4">
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
    </section>
  );
};

export default ProjectsSection;
