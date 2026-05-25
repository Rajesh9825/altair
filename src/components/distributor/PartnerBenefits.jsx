import {
  FaMedal,
  FaAward,
  FaTruck,
  FaHandshake,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa6";

const benefits = [
  {
    icon: <FaMedal />,
    title: "Premium Quality",
    desc: "Advanced RO, UV & Ozone purification technology ensures purity in every drop.",
  },
  {
    icon: <FaAward />,
    title: "Trusted & Certified",
    desc: "Every batch is tested to BIS14543 standards for safety and reliability.",
  },
  {
    icon: <FaTruck />,
    title: "Timely Supply",
    desc: "Efficient supply chain and reliable delivery support across the region.",
  },
  {
    icon: <FaHandshake />,
    title: "Growth Together",
    desc: "Strong distributor support, attractive margins and long-term partnership.",
  },
];

const PartnerBenefits = () => {
  return (
    <div
      className="
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-[#dbeeff]

        bg-white/70
        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(13,59,142,0.08)]

        p-6
        md:p-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-[-100px]
          right-[-100px]
          w-[220px]
          h-[220px]
          rounded-full
          bg-cyan-100/40
          blur-3xl
        "
      ></div>

      {/* Heading */}
      <div className="relative z-10 mb-8">
        
        <span
          className="
            inline-block
            px-4
            py-1.5
            rounded-full
            bg-[#eef7ff]
            text-[#1558d6]
            text-sm
            font-semibold
            mb-4
          "
        >
          Distributor Benefits
        </span>

        <h2
          className="
            text-[#0d3b8e]
            text-3xl
            md:text-4xl
            font-extrabold
            leading-tight
            tracking-[-2px]
            mb-4
          "
        >
          Why Partner <br />
          with Altair?
        </h2>

        <p
          className="
            text-slate-600
            text-base
            md:text-lg
            leading-relaxed
            max-w-[550px]
          "
        >
          Grow with a trusted packaged drinking water
          brand focused on quality, consistency and
          long-term business success.
        </p>
      </div>

      {/* Benefits */}
      <div className="relative z-10 space-y-4">
        
        {benefits.map((item, index) => (
          <div
            key={index}
            className="
              group
              relative

              flex
              items-start
              gap-4

              rounded-2xl

              border
              border-[#e7f0fb]

              bg-white/80

              p-4
              md:p-5

              hover:-translate-y-1
              hover:shadow-[0_15px_35px_rgba(21,88,214,0.08)]

              transition-all
              duration-500
            "
          >
            {/* Hover Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-2xl

                opacity-0
                group-hover:opacity-100

                bg-gradient-to-r
                from-cyan-50/60
                to-blue-50/40

                transition-all
                duration-500
              "
            ></div>

            {/* Icon */}
            <div
              className="
                relative
                z-10

                w-12
                h-12

                rounded-xl

                bg-gradient-to-br
                from-[#1558d6]
                to-[#0d3b8e]

                text-white

                flex
                items-center
                justify-center

                text-lg

                shadow-lg

                group-hover:scale-110
                group-hover:rotate-6

                transition-all
                duration-500

                shrink-0
              "
            >
              {item.icon}
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
              
              <h3
                className="
                  text-[#0d3b8e]
                  text-xl
                  md:text-2xl
                  font-bold
                  mb-1
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-slate-700
                  leading-relaxed
                  text-sm
                  md:text-base
                "
              >
                {item.desc}
              </p>
            </div>

            {/* Arrow */}
            <div
              className="
                hidden md:flex

                relative
                z-10

                text-[#1558d6]

                opacity-0
                translate-x-3

                group-hover:opacity-100
                group-hover:translate-x-0

                transition-all
                duration-500
              "
            >
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div
        className="
          relative
          z-10

          mt-6

          rounded-[24px]

          bg-gradient-to-r
          from-[#1558d6]
          to-[#0d3b8e]

          p-5
          md:p-6

          text-white

          overflow-hidden
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            top-[-60px]
            right-[-60px]
            w-[160px]
            h-[160px]
            rounded-full
            bg-white/10
            blur-2xl
          "
        ></div>

        <div className="relative z-10 flex items-center gap-4">
          
          {/* Icon */}
          <div
            className="
              w-14
              h-14

              rounded-2xl

              bg-white/10
              backdrop-blur-md

              flex
              items-center
              justify-center

              text-xl

              shrink-0
            "
          >
            <FaPhone />
          </div>

          {/* Content */}
          <div>
            
            <p className="text-blue-100 mb-1 text-sm md:text-base">
              Have Questions?
            </p>

            <h3
              className="
                text-xl
                md:text-2xl
                font-bold
                tracking-wide
              "
            >
              +91 9004234955
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBenefits;