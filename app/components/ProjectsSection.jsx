import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Learning App",
    description: "Learning App Description",
    image: "/images/projects/learning-app.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Movie App",
    description: "Movie App Description",
    image: "/images/projects/movie-app.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Tip Calculator App",
    description: "Tip Calculator App Description",
    image: "/images/projects/tip-calculator.jpg",
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6">My Projects</h2>
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
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
  );
};

export default ProjectsSection;
