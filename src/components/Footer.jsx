import { useState } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaChevronDown,
  FaChevronRight,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const FooterAccordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/30 lg:border-none py-4 lg:py-0">
      
      {/* Mobile Accordion Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between lg:cursor-default"
      >
        <h4 className="text-[#0d3b8e] text-lg font-bold">
          {title}
        </h4>

        <FaChevronDown
          className={`lg:hidden transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:block ${
          open ? "max-h-[500px] pt-5" : "max-h-0 lg:max-h-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#88cafb] pt-16">
      
      <div className="max-w-[1200px] mx-auto px-5">
        
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Quick Links */}
          <FooterAccordion title="Quick Links">
            <ul className="space-y-4">
              
              <li className="flex items-center gap-2">
                <FaChevronRight className="text-[#0d3b8e] text-xs" />
                <a
                  href="/"
                  className="text-slate-800 hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaChevronRight className="text-[#0d3b8e] text-xs" />
                <a
                  href="/about"
                  className="text-slate-800 hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaChevronRight className="text-[#0d3b8e] text-xs" />
                <a
                  href="/products"
                  className="text-slate-800 hover:text-white transition"
                >
                  Our Products
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaChevronRight className="text-[#0d3b8e] text-xs" />
                <a
                  href="/distributor"
                  className="text-slate-800 hover:text-white transition"
                >
                  Become Distributor
                </a>
              </li>
            </ul>
          </FooterAccordion>

          {/* Contact */}
          <FooterAccordion title="Contact">
            <ul className="space-y-5">
              
              <li>
                <h5 className="font-bold text-[#0d3b8e] mb-2">
                  Company Address:
                </h5>

                <p className="text-slate-800 leading-relaxed">
                  Office No 646 P.S Abacus NH12 Action Area 2E,
                  New Town Kolkata (700161)
                </p>
              </li>

              <li>
                <h5 className="font-bold text-[#0d3b8e] mb-2">
                  Factory Address:
                </h5>

                <p className="text-slate-800 leading-relaxed">
                  Panpur Narayanpur Kakinara (Kalyani Expressway),
                  opposite substation WBSIDCL,
                  West Bengal 743126
                </p>
              </li>

              <li className="flex items-center gap-3">
                <FaPhone className="text-[#0d3b8e]" />

                <a
                  href="tel:9004234955"
                  className="text-slate-800 hover:text-white transition"
                >
                  9004234955
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#0d3b8e]" />

                <a
                  href="mailto:info@altairfb.com"
                  className="text-slate-800 hover:text-white transition"
                >
                  info@altairfb.com
                </a>
              </li>
            </ul>
          </FooterAccordion>

          {/* Legal */}
          <FooterAccordion title="Legal">
            <ul className="space-y-4">
              
              <li className="flex items-center gap-2">
                <FaChevronRight className="text-[#0d3b8e] text-xs" />

                <a
                  href="#"
                  className="text-slate-800 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaChevronRight className="text-[#0d3b8e] text-xs" />

                <a
                  href="#"
                  className="text-slate-800 hover:text-white transition"
                >
                  Terms & Conditions
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaChevronRight className="text-[#0d3b8e] text-xs" />

                <a
                  href="#"
                  className="text-slate-800 hover:text-white transition"
                >
                  Cancellation & Refund Policy
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaChevronRight className="text-[#0d3b8e] text-xs" />

                <a
                  href="#"
                  className="text-slate-800 hover:text-white transition"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </FooterAccordion>

          {/* Social */}
          <div className="py-4 lg:py-0">
            
            <h4 className="text-[#0d3b8e] text-lg font-bold mb-5">
              Follow Us
            </h4>

            <div className="flex gap-4">
              
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0d3b8e] text-white flex items-center justify-center hover:bg-white hover:text-[#0d3b8e] transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0d3b8e] text-white flex items-center justify-center hover:bg-white hover:text-[#0d3b8e] transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#0d3b8e] text-white flex items-center justify-center hover:bg-white hover:text-[#0d3b8e] transition duration-300"
              >
                <FaLocationDot />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#0c70b1] text-white text-center py-5 mt-10 text-sm">
        © 2026 Altair Food & Beverage Pvt. Ltd.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;