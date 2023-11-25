import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-softOne">
      <Navbar />
      <div className=" bg-softOne dark:bg-darkOne">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
