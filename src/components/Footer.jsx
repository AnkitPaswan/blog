import React from "react";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    // Footer container with modern background and separation
    <footer className="bg-gray-100 border-t border-gray-200 ">
      
      {/* Top Section: Main content columns - Uses 3 columns on desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
        
        {/* Logo & Copyright (Column 1) - Text is centered on all screens */}
        <div className="col-span-1 text-center">
          <h1 className="text-3xl font-extrabold mb-2 text-indigo-600 tracking-wider">
            BLOGS
          </h1>
          <p className="text-sm text-gray-500 mt-4 max-w-sm mx-auto"> 
            © 2025 BLOGS Financial Services Private Limited <br />
            (formerly known as “BLOGS Advisory Services <br className="hidden sm:inline" /> Private Limited”)
          </p>
          
          <p className="text-xs text-gray-400 mt-2 italic">
            Empowering your financial journey.
          </p>
        </div>
        
        {/* Policies Column (Column 2) - Centered text */}
        <div className="text-center">
          <h3 className="text-md font-bold mb-3 text-gray-800 uppercase">POLICIES</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-indigo-600 transition duration-150 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-indigo-600 transition duration-150 cursor-pointer">Terms of Use</li>
            <li className="hover:text-indigo-600 transition duration-150 cursor-pointer">Cancellation Policy</li>
          </ul>
        </div>
        
        {/* About Column (Column 3) - Centered text */}
        <div className="text-center">
          <h3 className="text-md font-bold mb-3 text-gray-800 uppercase">ABOUT</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-indigo-600 transition duration-150 cursor-pointer">Features</li>
            <li className="hover:text-indigo-600 transition duration-150 cursor-pointer">What's New</li>
            <li className="hover:text-indigo-600 transition duration-150 cursor-pointer">Pricing</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar (Copyright and Social Icons) - All content centered */}
      <div className="border-t border-gray-200 py-4 bg-white"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* justify-center centers the items horizontally */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-12">
            
            {/* Social Icons Section */}
            <div className="flex items-center space-x-4 order-1">
              <span className="text-xs text-gray-600 font-bold">CONNECT</span>
              <a href=" " target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-indigo-600 transition duration-150" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-indigo-600 transition duration-150" />
              </a>
            </div>

            {/* Main Copyright Text */}
            <p className="text-xs text-gray-500 order-2 text-center">
              © {new Date().getFullYear()} BLOGS Financial Services Private Limited | All rights reserved
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
