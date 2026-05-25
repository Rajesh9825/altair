import { Link } from "react-router-dom";

const DistributorCTA = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-28
        bg-[#1558d6]
      "
    >
      {/* Soft Glow */}
      <div
        className="
          absolute
          top-[-150px]
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-cyan-300/10
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
          text-center
        "
      >
        {/* Heading */}
        <h2
          className="
            text-white
            text-5xl
            md:text-7xl
            font-extrabold
            leading-tight
            tracking-[-3px]
            mb-8
          "
        >
          Become an Altair Distributor
        </h2>

        {/* Description */}
        <p
          className="
            text-blue-100
            text-xl
            md:text-3xl
            leading-relaxed
            max-w-[1000px]
            mx-auto
            mb-16
          "
        >
          Partner with Altair and grow with a trusted
          packaged drinking water brand committed
          to purity and quality.
        </p>

        {/* Button */}
        <Link
          to="/distributor"
          className="
            group
            relative
            inline-flex
            items-center
            justify-center
            overflow-hidden

            bg-white
            text-[#0d3b8e]

            px-12
            py-5

            rounded-2xl

            text-xl
            font-bold

            shadow-xl

            hover:scale-105
            hover:-translate-y-1
            hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]

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
              bg-[#1558d6]/10
              skew-x-12

              transition-all
              duration-700

              group-hover:left-full
            "
          ></span>

          <span className="relative z-10">
            Become Distributor
          </span>
        </Link>
      </div>
    </section>
  );
};

export default DistributorCTA;