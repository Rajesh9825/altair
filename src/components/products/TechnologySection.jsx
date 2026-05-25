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
      "Advanced reverse osmosis technology removes impurities and ensures superior purity in every drop.",
  },
  {
    icon: <FaFlask />,
    title: "UV + Ozone",
    description:
      "Multi-stage sterilization system delivers enhanced safety, freshness and hygiene.",
  },
  {
    icon: <FaAward />,
    title: "BIS Certified",
    description:
      "Every batch is tested to BIS14543 standards to maintain trusted quality and compliance.",
  },
];

const TechnologySection = () => {
  return (
    <section
      className="
        relative
        py-28
        overflow-hidden
        bg-gradient-to-b
        from-white
        to-[#f8fcff]
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-cyan-100/40
          blur-3xl
        "
      ></div>

      <div
        className="
          absolute
          bottom-[-140px]
          right-[-140px]
          w-[360px]
          h-[360px]
          rounded-full
          bg-blue-100/40
          blur-3xl
        "
      ></div>

      <div
        className="
          relative
          z-10
          max-w-[1200px]
          mx-auto
          px-6
        "
      >
        {/* Heading */}
        <div className="text-center mb-20">
          
          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-[#eef7ff]
              text-[#1558d6]
              font-semibold
              mb-6
            "
          >
            Advanced Purification
          </span>

          <h2
            className="
              text-[#0d3b8e]
              text-4xl
              md:text-6xl
              font-extrabold
              tracking-[-2px]
              leading-tight
              mb-6
            "
          >
            Our Technology
          </h2>

          <p
            className="
              text-slate-600
              text-lg
              md:text-xl
              max-w-[850px]
              mx-auto
              leading-relaxed
            "
          >
            Every bottle is processed through advanced
            purification systems designed to deliver
            unmatched purity, freshness and safety.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {technologies.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden

                rounded-[36px]

                border
                border-[#dbeeff]

                bg-white/70
                backdrop-blur-xl

                p-10

                shadow-[0_20px_60px_rgba(13,59,142,0.06)]

                hover:-translate-y-3
                hover:shadow-[0_25px_60px_rgba(21,88,214,0.12)]

                transition-all
                duration-700
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700

                  bg-gradient-to-br
                  from-cyan-50/60
                  via-transparent
                  to-blue-50/40
                "
              ></div>

              {/* Decorative Blur */}
              <div
                className="
                  absolute
                  top-[-40px]
                  right-[-40px]
                  w-[140px]
                  h-[140px]
                  rounded-full
                  bg-cyan-100/40
                  blur-2xl
                "
              ></div>

              {/* Icon */}
              <div
                className="
                  relative
                  z-10

                  w-20
                  h-20
                  rounded-3xl

                  bg-gradient-to-br
                  from-[#1558d6]
                  to-[#0d3b8e]

                  text-white

                  flex
                  items-center
                  justify-center

                  text-3xl

                  shadow-lg

                  mb-8

                  group-hover:scale-110
                  group-hover:rotate-6

                  transition-all
                  duration-500
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  relative
                  z-10

                  text-[#0d3b8e]
                  text-3xl
                  font-bold

                  mb-5
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  relative
                  z-10

                  text-slate-700
                  text-lg
                  leading-relaxed
                "
              >
                {item.description}
              </p>

              {/* Bottom Accent */}
              <div
                className="
                  relative
                  z-10

                  mt-8

                  w-14
                  h-1
                  rounded-full

                  bg-cyan-400

                  group-hover:w-24

                  transition-all
                  duration-500
                "
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;