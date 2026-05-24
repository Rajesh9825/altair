import {
  FaMedal,
  FaAward,
  FaTruck,
  FaHandshake,
  FaPhone,
} from "react-icons/fa6";

const benefits = [
  {
    icon: <FaMedal />,
    title: "Premium Quality",
    desc: "Advanced RO, UV & Ozone technology ensures purity in every drop.",
  },
  {
    icon: <FaAward />,
    title: "Trusted & Certified",
    desc: "Tested to BIS14543 standards for trust and safety.",
  },
  {
    icon: <FaTruck />,
    title: "Timely Supply",
    desc: "Reliable supply chain and on-time delivery across the region.",
  },
  {
    icon: <FaHandshake />,
    title: "Growth Together",
    desc: "Attractive margins, strong support and long-term partnership.",
  },
];

const PartnerBenefits = () => {
  return (
    <div
      className="
        bg-white
        rounded-[32px]
        border
        border-[#dbeeff]
        shadow-lg
        p-8
      "
    >
      
      <h2
        className="
          text-[#0d3b8e]
          text-4xl
          font-bold
          mb-10
        "
      >
        Why Partner with Altair?
      </h2>

      <div className="space-y-8">
        
        {benefits.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-5
              pb-8
              border-b
              border-[#e6eef7]
              last:border-none
            "
          >
            
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-[#eef7ff]
                text-[#1558d6]
                flex
                items-center
                justify-center
                text-2xl
                shrink-0
              "
            >
              {item.icon}
            </div>

            <div>
              
              <h3
                className="
                  text-[#0d3b8e]
                  text-2xl
                  font-bold
                  mb-2
                "
              >
                {item.title}
              </h3>

              <p className="text-slate-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Card */}
      <div
        className="
          mt-10
          bg-[#eef7ff]
          rounded-3xl
          p-6
          flex
          items-center
          gap-5
        "
      >
        <div
          className="
            w-16
            h-16
            rounded-full
            bg-[#1558d6]
            text-white
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          <FaPhone />
        </div>

        <div>
          
          <p className="text-slate-700 mb-1">
            Have Questions?
          </p>

          <h3
            className="
              text-[#0d3b8e]
              text-2xl
              font-bold
            "
          >
            +91 9004234955
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PartnerBenefits;