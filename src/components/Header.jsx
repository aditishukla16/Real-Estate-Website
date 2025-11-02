import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import luxuryhome from "../assets/luxuryhome.jpg";

const Header = () => {
  return (
    <header
      id="Header"
      className="relative min-h-screen flex flex-col justify-between bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${luxuryhome})` }}
    >
      {/* Dark Overlay (no blur) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-20 text-center text-white px-6 md:px-16 lg:px-32 mb-24"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
          Discover Your Dream Space, Designed for Modern Living
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Experience the perfect blend of luxury, comfort, and innovation.  
          Explore homes crafted to elevate your lifestyle.
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          {/* Gradient Button */}
          <a
            href="#Projects"
            className="relative px-8 py-3 rounded-lg text-lg font-medium text-white bg-gradient-to-r from-blue-300 via-green-600 to-green-800 hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Explore Projects
          </a>

          {/* Glassmorphism-style Button (without blur) */}
          <a
            href="#Contact"
            className="px-8 py-3 rounded-lg text-lg font-medium border border-white/40 bg-white/10 hover:bg-green/20 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;



