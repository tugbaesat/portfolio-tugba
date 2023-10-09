import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return <main className="flex flex-col min-h-screen bg-[#121212]">
    <div className="container px-12 py-4 mx-auto">
    <HeroSection/>
    </div>
  </main>;
}
