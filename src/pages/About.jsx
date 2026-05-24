import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "../components/about/AboutHero";
import AboutIndustry from "../components/about/AboutIndustry";
import AboutCompany from "../components/about/AboutCompany";
import AddressSection from "../components/about/AddressSection";
import VisionMission from "../components/about/VisionMission";

const About = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[100px]">
        <AboutHero />
        <AboutIndustry />
        <AboutCompany />
        <AddressSection />
        <VisionMission />
      </main>

      <Footer />
    </>
  );
};

export default About;