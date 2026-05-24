import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import DistributorHero from "../components/distributor/DistributorHero";
import PartnerBenefits from "../components/distributor/PartnerBenefits";
import DistributorForm from "../components/distributor/DistributorForm";

const Distributor = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[100px]">
        <DistributorHero />

        <section className="py-24 bg-[#f8fcff]">
          <div className="max-w-[1200px] mx-auto px-6">
            
            <div className="grid lg:grid-cols-[420px_1fr] gap-10">
              
              <PartnerBenefits />
              <DistributorForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Distributor;