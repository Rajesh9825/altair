import {
  FaWater,
  FaFlask,
  FaAward,
} from "react-icons/fa6";

const technologies = [
  {
    icon: <FaWater />,
    title: "RO Purification",
    description:
      "Advanced reverse osmosis technology for superior purity.",
  },
  {
    icon: <FaFlask />,
    title: "UV + Ozone",
    description:
      "Multi-stage sterilization for maximum safety.",
  },
  {
    icon: <FaAward />,
    title: "BIS Certified",
    description:
      "Quality tested to BIS14543 standards.",
  },
];

const TechnologySection = () => {
  return (
    <section className="py-24 bg-white">
      
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
            Our Technology
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
            Every bottle is processed through
            advanced purification systems to ensure
            unmatched purity and freshness.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {technologies.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#eef7ff]
                rounded-[28px]
                p-8
                hover:-translate-y-3
                hover:shadow-[0_15px_35px_rgba(21,88,214,0.12)]
                transition-all
                duration-500
              "
            >
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#1558d6]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mb-6
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  text-[#0d3b8e]
                  text-2xl
                  font-bold
                  mb-4
                "
              >
                {item.title}
              </h3>

              <p className="text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;