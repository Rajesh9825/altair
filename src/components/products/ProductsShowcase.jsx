import {
  FaCircleCheck,
  FaDroplet,
} from "react-icons/fa6";

const features = [
  "Advanced RO + UV + Ozone purification",
  "Tested to BIS14543 standards",
  "Premium hygienic packaging",
  "Safe, refreshing & trustworthy",
];

const ProductsShowcase = () => {
  const handleExploreClick = () => {
    window.location.href = "/altair/products";
  };

  return (
    <section
      className="
        relative
        py-32
        overflow-hidden
        bg-gradient-to-b
        from-[#f4faff]
        to-white
      "
    >
      {/* Premium Background Ambient Orbs */}
      <div
        className="
          absolute
          top-[-10%];
          right-[-10%]
          w-[600px]
          h-[600px]
          rounded-full
          bg-gradient-to-br
          from-cyan-200/30
          to-blue-200/20
          blur-[120px]
          pointer-events-none
        "
      ></div>

      <div
        className="
          absolute
          bottom-[-10%]
          left-[-10%]
          w-[600px]
          h-[600px]
          rounded-full
          bg-gradient-to-tr
          from-blue-200/20
          to-transparent
          blur-[120px]
          pointer-events-none
        "
      ></div>

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1380px]
          mx-auto
          px-6
          sm:px-8
        "
      >
        {/* Section Heading Header Block */}
        <div className="text-center mb-24">
          <span
            className="
              inline-block
              px-5
              py-1.5
              rounded-full
              bg-[#0d3b8e]/10
              text-[#0d3b8e]
              text-sm
              font-bold
              tracking-[2px]
              uppercase
              mb-6
            "
          >
            Our Products
          </span>

          <h2
            className="
              font-['Signika']
              text-[#0d3b8e]
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-extrabold
              tracking-[-1px]
              leading-[1.1]
              mb-6
            "
          >
            Pure Hydration In Every Drop
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mb-6"></div>

          <p
            className="
              text-slate-600
              text-lg
              md:text-xl
              max-w-[750px]
              mx-auto
              leading-relaxed
            "
          >
            Altair delivers premium packaged drinking water processed through advanced purification 
            technology to ensure purity, freshness, and safety you can completely rely on.
          </p>
        </div>

        {/* PREMIUM ULTRA-MODERN SHOWCASE CARD */}
        <div
          className="
            relative
            group
            overflow-hidden
            rounded-[40px]
            bg-[#0d2149]
            border
            border-white/10
            shadow-[0_30px_80px_rgba(13,59,142,0.18)]
            p-8
            sm:p-12
            md:p-16
            hover:-translate-y-1.5
            transition-all
            duration-700
          "
        >
          {/* Subtle Internal Luxury Backlighting Flare */}
          <div
            className="
              absolute
              bottom-[-50%]
              right-[-20%]
              w-[500px]
              h-[500px]
              rounded-full
              bg-cyan-500/10
              blur-[80px]
              group-hover:bg-cyan-500/15
              transition-all
              duration-700
              pointer-events-none
            "
          ></div>

          {/* Core Structure Alignment Layout Framework */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              lg:grid-cols-[300px_1fr]
              gap-12
              xl:gap-20
              items-center
            "
          >
            {/* LEFT SIDE ARTWORK RINGS LAYER */}
            <div className="relative flex justify-center">
              {/* Outer Pulsing Glass Ring */}
              <div
                className="
                  absolute
                  w-[200px]
                  h-[200px]
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-400/20
                  to-blue-500/5
                  border
                  border-white/10
                  scale-110
                  group-hover:scale-125
                  transition-all
                  duration-700
                "
              ></div>

              {/* Core Icon Circular Disc */}
              <div
                className="
                  relative
                  w-[180px]
                  h-[180px]
                  rounded-full
                  bg-gradient-to-b
                  from-white/10
                  to-white/[0.02]
                  backdrop-blur-md
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  shadow-2xl
                  group-hover:border-cyan-400/40
                  transition-all
                  duration-700
                "
              >
                <FaDroplet
                  className="
                    text-[85px]
                    text-cyan-400
                    filter
                    drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]
                    group-hover:scale-105
                    group-hover:rotate-3
                    transition-all
                    duration-700
                  "
                />
              </div>
            </div>

            {/* RIGHT TEXT DETAILS PANEL CONTAINER */}
            <div className="text-center lg:text-left">
              <span 
                className="
                  inline-block
                  text-cyan-400
                  font-bold
                  tracking-wider
                  text-sm
                  uppercase
                  mb-3
                "
              >
                Premium Category
              </span>

              <h3
                className="
                  font-['Signika']
                  text-white
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  leading-tight
                  mb-6
                "
              >
                Packaged Mineral Water
              </h3>

              <p
                className="
                  text-slate-300
                  text-base
                  sm:text-lg
                  leading-relaxed
                  mb-10
                  max-w-[740px]
                  mx-auto
                  lg:mx-0
                "
              >
                Purified through advanced RO, UV, and Ozone treatment systems, Altair packaged drinking 
                water is masterfully crafted to deliver signature crispness, absolute safety, and 
                premium hydration values in every single bottle.
              </p>

              {/* Features Array Rendering Loop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-4
                      group/item
                      p-3
                      rounded-2xl
                      border
                      border-transparent
                      hover:border-white/5
                      hover:bg-white/[0.02]
                      transition-all
                      duration-300
                    "
                  >
                    {/* Feature Shield Check Ring Wrapper */}
                    <div
                      className="
                        w-9
                        h-9
                        rounded-xl
                        bg-white/5
                        flex
                        items-center
                        justify-center
                        shrink-0
                        group-hover/item:bg-cyan-400
                        group-hover/item:shadow-[0_0_15px_rgba(34,211,238,0.4)]
                        transition-all
                        duration-500
                      "
                    >
                      <FaCircleCheck
                        className="
                          text-cyan-400
                          text-lg
                          group-hover/item:text-[#0d2149]
                          transition-all
                          duration-500
                        "
                      />
                    </div>

                    <span
                      className="
                        text-slate-200
                        group-hover/item:text-white
                        text-base
                        sm:text-lg
                        font-medium
                        transition-colors
                        duration-300
                      "
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Premium Glossy CTA Trigger Wrapper */}
              <div className="mt-12 flex justify-center lg:justify-start">
                <button
                  onClick={handleExploreClick}
                  className="
                    group/btn
                    relative
                    overflow-hidden
                    px-10
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    text-[#0d2149]
                    font-bold
                    text-lg
                    shadow-[0_10px_30px_rgba(34,211,238,0.25)]
                    hover:-translate-y-1
                    hover:shadow-[0_20px_40px_rgba(34,211,238,0.4)]
                    transition-all
                    duration-500
                  "
                >
                  {/* Internal Liquid Shine Sheen Layer Overlay */}
                  <span
                    className="
                      absolute
                      top-0
                      -left-full
                      w-full
                      h-full
                      bg-white/25
                      skew-x-12
                      transition-all
                      duration-1000
                      group-hover/btn:left-full
                    "
                  ></span>

                  <span className="relative z-10 text-white font-extrabold tracking-wide">
                    Explore More
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;