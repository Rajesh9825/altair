import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#07152e]
        text-white
        pt-24
      "
    >
      {/* Background Glow */}
      {/* <div
        className="
          absolute
          top-[-150px]
          left-[-150px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      ></div> */}

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-180px]
          w-[380px]
          h-[380px]
          rounded-full
          bg-blue-400/10
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
        {/* Top Grid */}
        <div
          className="
            grid
            lg:grid-cols-4
            gap-12
            pb-16
            border-b
            border-white/10
          "
        >
          {/* Company */}
          <div>
            
            <h2
              className="
                text-3xl
                font-extrabold
                tracking-tight
                mb-6
              "
            >
              Altair
            </h2>

            <p
              className="
                text-slate-300
                leading-relaxed
                text-lg
                mb-8
              "
            >
              Delivering pure, safe and refreshing
              packaged drinking water with advanced
              purification technology and uncompromising quality.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaLocationDot />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    group
                    relative

                    w-12
                    h-12

                    rounded-2xl

                    bg-white/5
                    border
                    border-white/10

                    flex
                    items-center
                    justify-center

                    text-white
                    text-lg

                    backdrop-blur-xl

                    hover:-translate-y-2
                    hover:bg-[#1558d6]
                    hover:border-[#1558d6]

                    transition-all
                    duration-500
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      rounded-2xl
                      bg-[#1558d6]/20
                      opacity-0
                      group-hover:opacity-100
                      blur-xl
                      transition-all
                      duration-500
                    "
                  ></span>

                  <span className="relative z-10">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            
            <h3
              className="
                text-2xl
                font-bold
                mb-8
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-5">
              
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Distributor", path: "/distributor" },
              ].map((item, index) => (
                <li key={index}>
                  
                  <Link
                    to={item.path}
                    className="
                      group
                      flex
                      items-center
                      gap-3

                      text-slate-300
                      hover:text-white

                      transition-all
                      duration-300
                    "
                  >
                    <FaChevronRight
                      className="
                        text-sm

                        group-hover:translate-x-1
                        transition-all
                        duration-300
                      "
                    />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            
            <h3
              className="
                text-2xl
                font-bold
                mb-8
              "
            >
              Contact
            </h3>

            <div className="space-y-6">
              
              <div>
                
                <p className="text-slate-400 mb-2">
                  Office Address
                </p>

                <p className="text-slate-200 leading-relaxed">
                  Office No 646 P.S Abacus NH12,
                  Action Area 2E, New Town,
                  Kolkata - 700161
                </p>
              </div>

              <div className="flex items-center gap-4">
                
                <div
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10

                    flex
                    items-center
                    justify-center

                    text-cyan-300
                  "
                >
                  <FaPhone />
                </div>

                <a
                  href="tel:9004234955"
                  className="
                    text-slate-200
                    hover:text-white
                    transition-all
                  "
                >
                  +91 9004234955
                </a>
              </div>

              <div className="flex items-center gap-4">
                
                <div
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10

                    flex
                    items-center
                    justify-center

                    text-cyan-300
                  "
                >
                  <FaEnvelope />
                </div>

                <a
                  href="mailto:info@altairfb.com"
                  className="
                    text-slate-200
                    hover:text-white
                    transition-all
                  "
                >
                  info@altairfb.com
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            
            <h3
              className="
                text-2xl
                font-bold
                mb-8
              "
            >
              Legal
            </h3>

            <ul className="space-y-5">
              
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Refund Policy",
                "FAQs",
              ].map((item, index) => (
                <li key={index}>
                  
                  <a
                    href="#"
                    className="
                      group
                      flex
                      items-center
                      gap-3

                      text-slate-300
                      hover:text-white

                      transition-all
                      duration-300
                    "
                  >
                    <FaChevronRight
                      className="
                        text-sm

                        group-hover:translate-x-1
                        transition-all
                        duration-300
                      "
                    />

                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            py-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-slate-400 text-center md:text-left">
            © 2026 Altair Food & Beverage Pvt. Ltd.
            All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Purity you trust.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;