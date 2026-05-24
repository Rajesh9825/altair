import {
  FaCircleCheck,
  FaDroplet,
} from "react-icons/fa6";

const ProductCard = ({
  title,
  description,
  features,
}) => {
  return (
    <div
      className="
        group
        bg-white
        rounded-[32px]
        border
        border-[#dbeeff]
        shadow-lg
        p-8
        hover:-translate-y-3
        hover:shadow-[0_20px_40px_rgba(21,88,214,0.12)]
        transition-all
        duration-500
      "
    >
      <div className="grid lg:grid-cols-[120px_1fr_1fr] gap-8 items-center">
        
        {/* Icon */}
        <div
          className="
            w-[120px]
            h-[120px]
            rounded-full
            border
            border-[#dbeeff]
            bg-[#eef7ff]
            flex
            items-center
            justify-center
            mx-auto
          "
        >
          <FaDroplet className="text-5xl text-[#1558d6]" />
        </div>

        {/* Content */}
        <div>
          
          <h3
            className="
              text-[#0d3b8e]
              text-3xl
              font-bold
              mb-5
            "
          >
            {title}
          </h3>

          <p
            className="
              text-slate-700
              text-lg
              leading-relaxed
            "
          >
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4">
          
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3"
            >
              <FaCircleCheck className="text-[#1558d6] mt-1 shrink-0" />

              <span className="text-slate-700 text-lg">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;