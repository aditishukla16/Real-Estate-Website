import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link for routing
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 cursor-pointer" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white font-medium">
          <a href="#Header" className="hover:text-gray-400 transition">Home</a>
          <a href="#About" className="hover:text-gray-400 transition">About</a>
          <a href="#Projects" className="hover:text-gray-400 transition">Projects</a>
          <a href="#Testimonials" className="hover:text-gray-400 transition">Testimonials</a>
        </ul>

        {/* Signup Button */}
        <Link
          to="/signup" // ✅ navigates to /signup page
          className="hidden md:block bg-white text-gray-800 px-8 py-2 rounded-full font-medium hover:bg-gray-200 transition-all"
        >
          Signup
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 bottom-0 right-0 transition-all bg-white z-20 ${
          showMobileMenu ? "w-full" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex justify-end p-5 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="close"
          />
        </div>

        <ul className="flex flex-col items-center gap-4 mt-4 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2"
          >
            Testimonials
          </a>

          {/* ✅ Signup link inside mobile menu */}
          <Link
            to="/signup"
            onClick={() => setShowMobileMenu(false)}
            className="px-6 py-2 mt-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Signup
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

