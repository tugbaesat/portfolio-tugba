import ProjectsSection from "@/app/components/ProjectsSection";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = () => {
  return (
    <main className="flex flex-col min-h-screen bg-softOne">
      <Navbar />
      <div className="md:px-16 px-12">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
};

export default projects;
