import React from "react";
import { assets } from "../assets/assets";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-[#0f172a] text-gray-400 pt-16 pb-8 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
        {/* Left - Logo + Description */}
        <div className="flex-1 max-w-xl">
          <div className="flex items-center gap-2 mb-5">
            <img
              src={assets.logo_dark}
              alt="Estate Logo"
              className="w-36 object-contain"
            />
          </div>
          <p className="leading-relaxed text-gray-400 mb-6">
            Building elegant spaces that redefine modern living. We bring you
            premium properties crafted with innovation, trust, and timeless
            design. Your dream home awaits — let’s make it a reality.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://github.com/aditishukla16"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition-all"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://instagram.com/aditishukla16"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition-all"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditi-shukla-0b3bbb2a6"
            
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition-all"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href=""
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition-all"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div className="w-full md:w-1/5 flex flex-col items-start">
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <a href="#Header" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-white transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Newsletter */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-sm leading-relaxed">
            Get the latest updates, property insights, and offers delivered
            straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
              required
            />
            <button className="py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white font-medium transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider + Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Estate</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
