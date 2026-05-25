import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "../components/about/AboutHero";
import AboutSection from "../components/about/AboutSection";
import VisionMission from "../components/about/VisionMission";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[100px]">
        <AboutHero />
        <AboutSection />
        <VisionMission />
      </main>

      <Footer />
    </>
  );
};

export default About;