import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProductsHero from "../components/products/ProductsHero";
import ProductsGrid from "../components/products/ProductsGrid";
import TechnologySection from "../components/products/TechnologySection";
import DistributorCTA from "../components/products/DistributorCTA";

const Products = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[100px]">
        <ProductsHero />
        <ProductsGrid />
        <TechnologySection />
        <DistributorCTA />
      </main>

      <Footer />
    </>
  );
};

export default Products;