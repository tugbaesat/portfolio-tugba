import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return <main className="flex flex-col min-h-screen bg-[#121212]">
    <Navbar/>
    <div className="container px-12 py-4 mx-auto mt-24">
    <HeroSection/>
    <AboutSection/>
    <ProjectsSection/>
    <EmailSection/>
    </div>
    <Footer/>
  </main>;
}
