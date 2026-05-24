import { Link } from "react-router-dom";

const DistributorCTA = () => {
  return (
    <section
      className="
        py-24
        bg-gradient-to-r
        from-[#0d3b8e]
        to-[#1558d6]
        text-white
      "
    >
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        
        <h2
          className="
            text-4xl
            md:text-6xl
            font-bold
            mb-6
          "
        >
          Become an Altair Distributor
        </h2>

        <p
          className="
            text-lg
            md:text-2xl
            max-w-[800px]
            mx-auto
            mb-10
            text-blue-100
          "
        >
          Partner with Altair and grow with a trusted
          packaged drinking water brand committed
          to purity and quality.
        </p>

        <Link
          to="/distributor"
          className="
            inline-flex
            items-center
            justify-center
            bg-white
            text-[#0d3b8e]
            font-semibold
            text-lg
            px-8
            py-4
            rounded-xl
            hover:-translate-y-2
            hover:shadow-[0_15px_35px_rgba(255,255,255,0.25)]
            transition-all
            duration-500
          "
        >
          Become Distributor
        </Link>
      </div>
    </section>
  );
};

export default DistributorCTA;