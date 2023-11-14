import ProjectsSection from "@/app/components/ProjectsSection";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      {/* <div className="container px-12 py-4 my-24 md:mx-auto"> */}
        <ProjectsSection />
      {/* </div> */}
      <Footer />
    </main>
  );
};

export default projects;
