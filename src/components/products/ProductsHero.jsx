import heroBg from "../../assets/images/Web-Page-About-Section.webp";

const ProductsHero = () => {
  return (
    <section
      className="
        relative
        min-h-[80vh]
        flex
        items-center
        bg-cover
        bg-center
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        
        <div className="max-w-[600px]">
          
          <h1
            className="
              text-[#0d3b8e]
              font-extrabold
              leading-tight
              text-5xl
              md:text-7xl
            "
          >
            Our Products
          </h1>

          <div className="w-20 h-1 bg-cyan-400 rounded-full my-6"></div>

          <p
            className="
              text-slate-700
              text-lg
              md:text-2xl
              leading-relaxed
            "
          >
            At Altair, we deliver purity and freshness
            in every bottle using advanced purification
            technology and uncompromising quality standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;