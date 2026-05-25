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
          right-[-120px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-cyan-100/40
          blur-3xl
        "
      ></div>

      {/* Secondary Glow */}
      <div
        className="
          absolute
          bottom-[-140px]
          left-[-140px]
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
            Our Products
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
            Pure Hydration <br />
            in Every Drop
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
            Altair delivers premium packaged drinking
            water processed through advanced purification
            technology to ensure purity, freshness and trust.
          </p>
        </div>

        {/* Product Showcase Card */}
        <div
          className="
            relative
            group
            overflow-hidden
            rounded-[42px]
            bg-white
            border
            border-[#dbeeff]
            shadow-[0_20px_70px_rgba(13,59,142,0.08)]
            p-8
            md:p-14
            hover:-translate-y-2
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

          {/* Decorative Circle */}
          <div
            className="
              absolute
              top-[-80px]
              right-[-80px]
              w-[220px]
              h-[220px]
              rounded-full
              bg-cyan-100/40
            "
          ></div>

          {/* Main Grid */}
          <div
            className="
              relative
              z-10
              grid
              lg:grid-cols-[280px_1fr]
              gap-14
              items-center
            "
          >
            {/* LEFT VISUAL */}
            <div className="relative flex justify-center">
              
              {/* Circle Background */}
              <div
                className="
                  absolute
                  w-[160px]
                  h-[160px]
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-100
                  to-blue-100
                  blur-sm
                "
              ></div>

              {/* Product Icon */}
              <div
                className="
                  relative
                  w-[150px]
                  h-[150px]
                  rounded-full
                  bg-white/80
                  backdrop-blur-md
                  border
                  border-[#dbeeff]
                  flex
                  items-center
                  justify-center
                  shadow-xl

                  group-hover:scale-105
                  transition-all
                  duration-700
                "
              >
                <FaDroplet
                  className="
                    text-[90px]
                    text-[#1558d6]
                    drop-shadow-lg

                    group-hover:rotate-6
                    transition-all
                    duration-700
                  "
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              
              <h3
                className="
                  text-[#0d3b8e]
                  text-4xl
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
                  text-slate-700
                  text-lg
                  md:text-xl
                  leading-relaxed
                  mb-10
                  max-w-[700px]
                "
              >
                Purified through advanced RO, UV and Ozone
                treatment systems, Altair packaged drinking
                water is crafted to deliver freshness,
                safety and premium quality in every bottle.
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-5">
                
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      gap-4

                      group/item
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-[#eef7ff]
                        flex
                        items-center
                        justify-center
                        shrink-0

                        group-hover/item:bg-[#1558d6]
                        transition-all
                        duration-500
                      "
                    >
                      <FaCircleCheck
                        className="
                          text-[#1558d6]

                          group-hover/item:text-white
                          transition-all
                          duration-500
                        "
                      />
                    </div>

                    <span
                      className="
                        text-slate-700
                        text-lg
                        leading-relaxed
                      "
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="
                  mt-12
                  group/button
                  relative
                  overflow-hidden
                  px-8
                  py-4
                  rounded-2xl
                  bg-[#1558d6]
                  text-white
                  font-semibold
                  text-lg
                  shadow-lg

                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(21,88,214,0.3)]

                  transition-all
                  duration-500
                "
              >
                {/* Shine Animation */}
                <span
                  className="
                    absolute
                    top-0
                    -left-full
                    w-full
                    h-full
                    bg-white/20
                    skew-x-12

                    transition-all
                    duration-700

                    group-hover/button:left-full
                  "
                ></span>

                <span className="relative z-10">
                  Explore Products
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;