import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProductsHero from "../components/products/ProductsHero";
import ProductsShowcase from "../components/products/ProductsShowcase";
import TechnologySection from "../components/products/TechnologySection";
import DistributorCTA from "../components/products/DistributorCTA";

const Products = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[100px]">
        <ProductsHero />
        <ProductsShowcase />
        <TechnologySection />
        <DistributorCTA />
      </main>

      <Footer />
    </>
  );
};

export default Products;