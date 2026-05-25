import {
  FaDroplet,
  FaIndustry,
} from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section
      className="
        relative
        py-24
        bg-gradient-to-b
        from-white
        to-[#f5fbff]
        overflow-hidden
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

      <div
        className="
          max-w-[1200px]
          mx-auto
          px-6
          relative
          z-10
        "
      >
        {/* Section Heading */}
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
            About Altair
          </span>

          <h2
            className="
              text-[#0d3b8e]
              text-4xl
              md:text-6xl
              font-extrabold
              leading-tight
              tracking-[-2px]
              mb-6
            "
          >
            Purity Powered <br />
            by Innovation
          </h2>

          <p
            className="
              text-slate-600
              text-lg
              md:text-xl
              leading-relaxed
              max-w-[850px]
              mx-auto
            "
          >
            Altair Food & Beverage Pvt. Ltd. is committed
            to delivering safe, refreshing and premium
            packaged drinking water through advanced
            purification technology and uncompromising
            quality standards.
          </p>
        </div>

        {/* Main Content Grid */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            items-stretch
          "
        >
          {/* LEFT CARD */}
          <div
            className="
              relative
              bg-white
              rounded-[36px]
              p-10
              shadow-[0_20px_60px_rgba(13,59,142,0.08)]
              border
              border-[#e3f0ff]
              overflow-hidden
            "
          >
            {/* Decorative Circle */}
            <div
              className="
                absolute
                top-[-60px]
                right-[-60px]
                w-[180px]
                h-[180px]
                rounded-full
                bg-cyan-100/40
              "
            ></div>

            {/* Icon */}
            <div
              className="
                relative
                w-20
                h-20
                rounded-3xl
                bg-[#1558d6]
                text-white
                flex
                items-center
                justify-center
                text-3xl
                mb-8
                shadow-lg
              "
            >
              <FaIndustry />
            </div>

            <h3
              className="
                text-[#0d3b8e]
                text-3xl
                font-bold
                mb-6
              "
            >
              About Our Company
            </h3>

            <div
              className="
                space-y-6
                text-slate-700
                text-lg
                leading-relaxed
              "
            >
              <p>
                Altair F&B PRIVATE LIMITED is East India’s
                upcoming manufacturer for packaged mineral
                water based in Kalyani, West Bengal.
              </p>

              <p>
                Founded with the belief that safe drinking
                water is a right — not a luxury — Altair
                is dedicated to providing purity and trust
                in every bottle.
              </p>

              <p>
                Using world-class technology and strict
                quality control, we ensure every drop meets
                BIS14543 standards with uncompromising
                consistency.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="
              relative
              bg-gradient-to-br
              from-[#0d3b8e]
              to-[#1558d6]
              rounded-[36px]
              p-10
              overflow-hidden
              text-white
              shadow-[0_20px_60px_rgba(21,88,214,0.18)]
            "
          >
            {/* Decorative Elements */}
            <div
              className="
                absolute
                top-[-80px]
                right-[-80px]
                w-[220px]
                h-[220px]
                rounded-full
                bg-white/10
              "
            ></div>

            <div
              className="
                absolute
                bottom-[-100px]
                left-[-100px]
                w-[260px]
                h-[260px]
                rounded-full
                bg-cyan-300/10
              "
            ></div>

            {/* Icon */}
            <div
              className="
                relative
                w-20
                h-20
                rounded-3xl
                bg-white/15
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-3xl
                mb-8
              "
            >
              <FaDroplet />
            </div>

            <h3
              className="
                text-3xl
                font-bold
                mb-6
              "
            >
              Industry & Technology
            </h3>

            <div
              className="
                space-y-6
                text-blue-100
                text-lg
                leading-relaxed
              "
            >
              <p>
                Altair combines advanced RO, UV and Ozone
                purification technology with a heritage
                of quality and trust.
              </p>

              <p>
                Every bottle undergoes rigorous testing
                to maintain safety, freshness and
                consistency throughout production.
              </p>

              <p>
                Our commitment is simple —
                delivering purity you can trust
                with every single drop.
              </p>
            </div>

            {/* Feature Points */}
            <div className="mt-10 space-y-4">
              
              {[
                "Advanced RO + UV + Ozone",
                "BIS14543 Standard Testing",
                "Premium Hygienic Packaging",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-cyan-300
                    "
                  ></div>

                  <span className="text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;