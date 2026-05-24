import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  return (
    <section className="py-24 bg-[#f8fcff]">
      
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          
          <h2
            className="
              text-[#0d3b8e]
              text-4xl
              md:text-5xl
              font-bold
              mb-5
            "
          >
            Product List
          </h2>

          <p
            className="
              text-slate-700
              text-lg
              md:text-xl
              max-w-[800px]
              mx-auto
            "
          >
            We are committed to providing safe,
            pure and refreshing drinking water.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-10">
          
          <ProductCard
            title="Packaged Mineral Water"
            description="
              Purified through advanced RO, UV and Ozone treatment.
              Packed with care to ensure freshness, safety and
              great taste in every drop.
            "
            features={[
              "Advanced purification (RO + UV + Ozone)",
              "Tested to BIS14543 standards",
              "Safe, refreshing and trustworthy",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;