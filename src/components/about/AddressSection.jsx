import {
  FaLocationDot,
  FaIndustry,
} from "react-icons/fa6";

const AddressSection = () => {
  return (
    <section className="py-20 bg-white">
      
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Factory Address */}
          <div
            className="
              bg-gradient-to-br
              from-[#eef7ff]
              to-[#ffffff]
              rounded-3xl
              p-8
              shadow-lg
              border
              border-[#dbeeff]
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >
            <div className="flex items-start gap-5">
              
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
                  shrink-0
                "
              >
                <FaIndustry />
              </div>

              <div>
                
                <h3
                  className="
                    text-[#0d3b8e]
                    text-2xl
                    font-bold
                    mb-4
                  "
                >
                  Factory Address
                </h3>

                <p className="text-slate-700 leading-relaxed">
                  Panpur Narayanpur Kakinara
                  (Kalyani Expressway),
                  opposite substation WBSIDCL,
                  West Bengal 743126
                </p>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div
            className="
              bg-gradient-to-br
              from-[#eef7ff]
              to-[#ffffff]
              rounded-3xl
              p-8
              shadow-lg
              border
              border-[#dbeeff]
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >
            <div className="flex items-start gap-5">
              
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
                  shrink-0
                "
              >
                <FaLocationDot />
              </div>

              <div>
                
                <h3
                  className="
                    text-[#0d3b8e]
                    text-2xl
                    font-bold
                    mb-4
                  "
                >
                  Company Address
                </h3>

                <p className="text-slate-700 leading-relaxed">
                  Office No 646 P.S Abacus NH12
                  Action Area 2E,
                  New Town Kolkata (700161)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;