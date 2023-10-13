import React from "react";
import ProjectCard from "./ProjectCard";
import projectImg1 from "../../public/images/projects/learning-app.png";
import projectImg2 from "../../public/images/projects/movie-app.jpg";
import projectImg3 from "../../public/images/projects/tip-calculator.png";

const projectData = [
  {
    id: 1,
    title: "Learning App",
    description:
      "Learning App web application is built using React with Next.js, utilizing Tailwind CSS for styling, and MongoDB for data storage.",
    image: projectImg1,
    gitUrl: "https://github.com/tugbaesat/Learnification",
    previewUrl: "https://learn-u-team-7.vercel.app/get-started",
  },
  {
    id: 2,
    title: "Movie App",
    description:
      "Movie App is a movie database project, where it shows movies, their casts, ratings, trailers, related movies, genres, and so on by using The Movie DB API.",
    image: projectImg2,
    gitUrl: "https://github.com/tugbaesat/movie-project",
    previewUrl: "https://202303-prm-tr-few.github.io/movie-project-baris-tugba-ayman/",
  },
  {
    id: 3,
    title: "Tip Calculator App",
    description:
      "Tip Calculator App is built using React with Next.js for calculating tip and total cost of the bill per person.",
    image: projectImg3,
    gitUrl: "https://github.com/tugbaesat/nextjs-tip-calculator",
    previewUrl: "https://nextjs-tip-calculator.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative min-h-screen">
      <div className="absolute top-0 bg-purple-300 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 bg-yellow-300 rounded-full -right-3 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bg-pink-300 rounded-full -bottom-8 -left-30 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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
