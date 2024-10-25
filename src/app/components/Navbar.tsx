"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-sans w-full flex items-center justify-between bg-fuchsia-100 bg-opacity-90 p-4 md:px-32 sticky top-0 py-2 transition-colors duration-300 z-50 text-base sm:text-xl ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800">
          <Link href="/">Nini Nails</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold text-2xl">
          <Link className="text-gray-600 hover:text-gray-900" href="#services">
            Prestations
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="#about">
            À Propos
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="#booking">
            Réservation
          </Link>
          <Link className="text-gray-600 hover:text-gray-900" href="#contact">
            Contact
          </Link>
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link
            className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            href="#services"
          >
            Prestations
          </Link>
          <Link
            className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            href="#about"
          >
            À Propos
          </Link>
          <Link
            className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            href="#booking"
          >
            Réservation
          </Link>
          <Link
            className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            href="#contact"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
