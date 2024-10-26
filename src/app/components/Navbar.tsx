"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after scrolling
    }
  };

  return (
    <nav className="text-black font-sans w-full flex items-center justify-between bg-fuchsia-100 bg-opacity-90 p-4 md:px-32 sticky top-0 py-2 transition-colors duration-300 z-50 text-base sm:text-xl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800">
          <Link href="/">Nini Nails</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold text-2xl">
          <button
            className="text-black hover:scale-125 transition"
            onClick={() => scrollToSection("prestation")}
          >
            Prestations
          </button>
          <button
            onClick={() => scrollToSection("avis")}
            className="text-black hover:scale-125 transition"
          >
            Avis
          </button>
          <button
            className="text-black hover:scale-125 transition"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className=" font-sans fixed inset-0 bg-fuchsia-100 bg-opacity-90 flex flex-col items-center justify-center z-40">
          <button
            className="absolute top-6 right-6 text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col items-center space-y-8 text-3xl font-bold">
            <button
              className="text-black hover:scale-110 transition"
              onClick={() => scrollToSection("prestation")}
            >
              Prestations
            </button>
            <button
              className="text-black hover:scale-110 transition"
              onClick={() => scrollToSection("avis")}
            >
              Avis
            </button>
            <button
              className="text-black hover:scale-110 transition"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
