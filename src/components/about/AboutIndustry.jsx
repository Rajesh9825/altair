import { FaDroplet } from "react-icons/fa6";

const AboutIndustry = () => {
  return (
    <section className="py-20 bg-white">
      
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
            <FaDroplet className="text-5xl text-[#1558d6]" />
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
              About our Industry
            </h2>

            <p
              className="
                text-slate-700
                text-lg
                leading-relaxed
                max-w-[900px]
              "
            >
              At Altair F&B combines advanced RO, UV and
              Ozone technology with heritage of quality.
              Every drop is tested to BIS14543 standards,
              because we believe in purity you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIndustry;