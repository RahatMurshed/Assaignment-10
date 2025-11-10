
import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111827]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-8 h-8 text-[#F97316]"
            fill="currentColor"
          >
            <path d="M10 40 L50 20 L90 40 L50 60 Z M50 60 V80 L90 60 V40 Z" />
          </svg>
          <h1 className="text-[#F97316] text-xl font-bold tracking-wide">
            StudyMate
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-[#F97316] transition duration-300"
          >
            Home
          </a>
          <a
            href="#partners"
            className="text-gray-300 hover:text-[#F97316] transition duration-300"
          >
            Find Partners
          </a>
          <a
            href="#features"
            className="text-gray-300 hover:text-[#F97316] transition duration-300"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-[#F97316] transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to='/login' className="text-white font-medium hover:text-[#F97316] transition">
            Login
          </Link>
          <button className="bg-[#F97316] hover:bg-[#F59E0B] text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-[#F97316]/40 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-[#F97316]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1F2937] border-t border-gray-800">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#home"
              className="text-gray-300 hover:text-[#F97316] transition duration-300"
            >
              Home
            </a>
            <a
              href="#partners"
              className="text-gray-300 hover:text-[#F97316] transition duration-300"
            >
              Find Partners
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-[#F97316] transition duration-300"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-[#F97316] transition duration-300"
            >
              Contact
            </a>
            <button className="text-white font-medium hover:text-[#F97316] transition">
              Login
            </button>
            <button className="bg-[#F97316] hover:bg-[#F59E0B] text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-[#F97316]/40 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
