import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn, // Swapped FaXTwitter with FaLinkedinIn
  FaBars,
  FaXmark,
} from "react-icons/fa6";

import logo from "../assets/images/Altair-Final-Logo.webp";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // Helper function to handle mobile menu closure upon routing clicks
  const closeMenu = () => setMobileMenu(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        h-[100px]
        z-50

        bg-[#0d3b8e]/95
        backdrop-blur-md
        shadow-[0_4px_20px_rgba(0,0,0,0.12)]

        transition-all
        duration-300
      "
    >
      {/* MAX-WIDTH BOUNDARY WRAPPER */}
      <div 
        className="
          w-full 
          max-w-[1380px] 
          h-full 
          mx-auto 
          
          /* ADJUSTED PADDING: Changed lg:px-0 to lg:px-6 to add side spacing on large screens */
          px-6 
          sm:px-8 
          md:px-4 
          lg:px-6 
          
          flex 
          items-center 
          justify-between
        "
      >
        
        {/* LEFT */}
        <div 
          className={`flex items-center h-full transition-opacity duration-300 ${
            mobileMenu ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Link to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="Altair Logo"
              className="h-[80px] w-auto"
            />
          </Link>

          <div className="hidden lg:block w-[1px] h-[40px] bg-white/30 mx-8"></div>

          <nav className="hidden lg:block">
            <ul className="flex gap-8">
              <li>
                <Link
                  to="/about"
                  className="text-white font-semibold hover:text-blue-200 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-white font-semibold hover:text-blue-200 transition"
                >
                  Our Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Desktop Social */}
        <div className="hidden lg:flex gap-4">
          <a
            href="#"
            className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#0d3b8e] transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#0d3b8e] transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#0d3b8e] transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-white text-2xl z-50"
        >
          {mobileMenu ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      <div
        className={`fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] bg-[#0d3b8e] flex flex-col items-center justify-between px-6 py-12 transition-all duration-300 z-40 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top/Center Content Group */}
        <div className="flex flex-col items-center w-full">
          <img
            src={logo}
            alt="Altair Corporate Brand Asset"
            className="h-[140px] mb-10 object-contain"
          />

          <ul className="flex flex-col gap-8 text-center items-center w-full">
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="text-white text-3xl font-semibold tracking-wide hover:opacity-80 transition"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                onClick={closeMenu}
                className="text-white text-3xl font-semibold tracking-wide hover:opacity-80 transition"
              >
                Our Products
              </Link>
            </li>

            <li className="w-full max-w-[280px] mt-2">
              <Link
                to="/distributor"
                onClick={closeMenu}
                className="bg-white text-[#0d3b8e] px-8 py-3.5 rounded-full text-xl font-bold block shadow-md active:scale-95 transition-transform"
              >
                Become Distributor
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Decorative Section */}
        <div className="w-full flex flex-col items-center mt-auto">
          {/* Subtle Horizontal Divider Line */}
          <div className="w-full max-w-[240px] h-[1px] bg-white/20 mb-8"></div>

          {/* Floating Circle Brand-Colored Social Icons Row */}
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white text-[#1877F2] flex items-center justify-center text-lg shadow-md hover:scale-110 active:scale-95 transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white text-[#E4405F] flex items-center justify-center text-lg shadow-md hover:scale-110 active:scale-95 transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white text-[#0A66C2] flex items-center justify-center text-lg shadow-md hover:scale-110 active:scale-95 transition-all"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;