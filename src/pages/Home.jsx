import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[100px]">
        <HeroSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;