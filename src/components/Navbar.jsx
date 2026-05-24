import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

import logo from "../assets/images/Altair-Final-Logo.webp";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
          className="
            fixed
            top-0
            left-0
            w-full
            h-[100px]
            flex
            items-center
            justify-between
            px-[5%]
            z-50

            bg-[#0d3b8e]/95
            backdrop-blur-md
            shadow-[0_4px_20px_rgba(0,0,0,0.12)]

            transition-all
            duration-300
          "
        >
      
      {/* LEFT */}
      <div className="flex items-center h-full">
        <Link to="/">
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
          <FaLocationDot />
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="lg:hidden text-white text-2xl"
      >
        {mobileMenu ? <FaXmark /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] bg-[#0d3b8e] flex flex-col items-center px-5 py-10 transition-all duration-300 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          src={logo}
          alt=""
          className="h-[140px] mb-10"
        />

        <ul className="flex flex-col gap-10 text-center">
          <li>
            <Link
              to="/about"
              className="text-white text-3xl font-semibold"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              className="text-white text-3xl font-semibold"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/distributor"
              className="bg-white text-[#0d3b8e] px-8 py-4 rounded-full text-xl font-semibold inline-block"
            >
              Become Distributor
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;