import heroBg from "../../assets/images/Web-Page-About-Section.webp";

const AboutHero = () => {
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
      <div className="absolute inset-0 bg-white/1"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        
        <div className="max-w-[550px]">
          
          <h1
            className="
              text-[#0d3b8e]
              font-extrabold
              leading-tight
              text-5xl
              md:text-7xl
            "
          >
            About Us
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
            At Altair F&B, purity is not just our promise 
            it’s our purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;