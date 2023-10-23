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
    <section id="projects" ref={targetRef} className="relative h-[150vh]">
      <div class="hidden md:block">
        <div class="absolute top-5 left-5 bg-yellow-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000 pointer-events-none"></div>
        <div class="absolute bottom-1/3 right-1/2 bg-blue-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000 pointer-events-none"></div>
        <div class="absolute top-[30%] right-[20%] bg-purple-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-7000 pointer-events-none"></div>
        <div class="absolute bottom-5 right-5 bg-pink-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-8000 pointer-events-none"></div>
        <div class="absolute bottom-5 left-5 bg-orange-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-8000 pointer-events-none"></div>
      </div>
      <div class="md:hidden absolute top-1/4 right-1/4 bg-pink-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
      <div class="md:hidden absolute bottom-1/4 left-1/8 bg-yellow-300 rounded-full w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 pointer-events-none"></div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-neutral-200 bg-opacity-20 rounded-lg">
        <motion.div style={{ x }} className="flex gap-8">
          {projectData.map((project) => (
            <motion.div key={project.id} whileHover={{ scale: 1.1 }}>
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
