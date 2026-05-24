import { FaIndustry } from "react-icons/fa6";

const AboutCompany = () => {
  return (
    <section className="py-20 bg-[#f8fcff]">
      
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div
          className="
            grid
            md:grid-cols-[120px_1fr]
            gap-10
            items-start
          "
        >
          
          {/* Icon */}
          <div
            className="
              w-[120px]
              h-[120px]
              rounded-full
              bg-[#eef7ff]
              flex
              items-center
              justify-center
            "
          >
            <FaIndustry className="text-5xl text-[#1558d6]" />
          </div>

          {/* Content */}
          <div>
            
            <h2
              className="
                text-[#0d3b8e]
                text-3xl
                md:text-5xl
                font-bold
                mb-6
              "
            >
              About Our Company
            </h2>

            <p
              className="
                text-slate-700
                text-lg
                leading-relaxed
                max-w-[900px]
              "
            >
              Altair F&B PRIVATE LIMITED is East India’s upcoming
              manufacturer for packaged mineral water based in
              Kalyani, West Bengal.

              <br />
              <br />

              Altair F&B was founded with one belief:
              safe drinking water is a right, not a luxury.

              <br />
              <br />

              We are using world-class technology and
              uncompromising quality standards because
              for us, purity you can trust isn’t a tagline —
              it’s a responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;