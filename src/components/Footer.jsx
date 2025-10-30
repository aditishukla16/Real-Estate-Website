import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 px-6 md:px-20 lg:px-32 w-full overflow-hidden" id="Footer">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
        
        {/* Left - Logo + Description */}
        <div className="flex-1 max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <img src={assets.logo_dark} alt="Estate Logo" className="w-15h" />

          </div>
          <p className="leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, explicabo ut fuga facilis ratione excepturi unde blanditiis, 
            dignissimos deleniti quidem nisi eos eveniet natus dicta! Nemo fugit repellendus consectetur optio.
          </p>
        </div>

        {/* Middle - Company Links */}
        <div className="w-full md:w-1/5 flex flex-col items-start">
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#Header" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#About" className="hover:text-white transition-colors">About us</a></li>
            <li><a href="#Contact" className="hover:text-white transition-colors">Contact us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right - Newsletter */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-xs leading-relaxed">
            The latest news, articles and resources, sent to your inbox directly
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-3 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
            <button className="py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider + Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2024 RealEstate. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
