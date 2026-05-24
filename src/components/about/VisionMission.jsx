import {
  FaBullseye,
  FaMountainSun,
} from "react-icons/fa6";

const VisionMission = () => {
  return (
    <section className="py-20 bg-[#f8fcff]">
      
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div
          className="
            bg-white
            rounded-[32px]
            shadow-xl
            p-10
            md:p-14
            border
            border-[#dbeeff]
          "
        >
          
          {/* Heading */}
          <div className="mb-12">
            
            <h2
              className="
                text-[#0d3b8e]
                text-4xl
                md:text-5xl
                font-bold
                mb-4
              "
            >
              Vision & Mission
            </h2>

            <div className="w-20 h-1 bg-cyan-400 rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Vision */}
            <div
              className="
                bg-[#eef7ff]
                rounded-3xl
                p-8
                hover:-translate-y-2
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
                <FaBullseye />
              </div>

              <h3
                className="
                  text-[#0d3b8e]
                  text-2xl
                  font-bold
                  mb-4
                "
              >
                Vision
              </h3>

              <p className="text-slate-700 leading-relaxed text-lg">
                To be East India’s most trusted manufacturer
                of packaged drinking water, setting benchmarks
                in quality, compliance, and reliability.
              </p>
            </div>

            {/* Mission */}
            <div
              className="
                bg-[#eef7ff]
                rounded-3xl
                p-8
                hover:-translate-y-2
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
                <FaMountainSun />
              </div>

              <h3
                className="
                  text-[#0d3b8e]
                  text-2xl
                  font-bold
                  mb-4
                "
              >
                Mission
              </h3>

              <p className="text-slate-700 leading-relaxed text-lg">
                To bottle purity at scale using world-class
                technology and zero-compromise quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;