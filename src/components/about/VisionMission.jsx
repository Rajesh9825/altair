import {
  FaBullseye,
  FaMountainSun,
} from "react-icons/fa6";

const cards = [
  {
    icon: <FaBullseye />,
    title: "Vision",
    description:
      "To be East India’s most trusted manufacturer of packaged drinking water, setting benchmarks in quality, compliance, and reliability.",
  },
  {
    icon: <FaMountainSun />,
    title: "Mission",
    description:
      "To bottle purity at scale using world-class technology and zero-compromise quality.",
  },
];

const VisionMission = () => {
  return (
    <section
      className="
        relative
        py-28
        overflow-hidden
        bg-gradient-to-b
        from-[#f8fcff]
        to-white
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-[-120px]
          left-[-120px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-cyan-100/40
          blur-3xl
        "
      ></div>

      <div
        className="
          max-w-[1200px]
          mx-auto
          px-6
          relative
          z-10
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
            Our Foundation
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
            Vision & Mission
          </h2>

          <p
            className="
              text-slate-600
              text-lg
              md:text-xl
              max-w-[800px]
              mx-auto
              leading-relaxed
            "
          >
            Our purpose is rooted in trust, innovation
            and commitment to delivering purity at scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                p-[1px]
                bg-gradient-to-br
                from-cyan-200/60
                via-white
                to-blue-200/60
                hover:scale-[1.02]
                transition-all
                duration-500
              "
            >
              {/* Glass Card */}
              <div
                className="
                  relative
                  h-full
                  rounded-[36px]
                  bg-white/80
                  backdrop-blur-xl
                  p-10
                  shadow-[0_20px_60px_rgba(13,59,142,0.08)]
                  overflow-hidden
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
                    from-cyan-100/40
                    to-blue-100/20
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

                    group-hover:rotate-6
                    group-hover:scale-110
                    transition-all
                    duration-500
                  "
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                    relative
                    z-10
                    text-[#0d3b8e]
                    text-3xl
                    font-bold
                    mb-6
                  "
                >
                  {card.title}
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
                  {card.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className="
                    relative
                    z-10
                    mt-10
                    w-16
                    h-1
                    rounded-full
                    bg-cyan-400
                    group-hover:w-28
                    transition-all
                    duration-500
                  "
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;