"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Nini Nails</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link className="text-gray-600 hover:text-gray-900" href="#services">
            Prestation
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
          <Link href="#services">
            <a className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              Services
            </a>
          </Link>
          <Link href="#about">
            <a className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              À Propos
            </a>
          </Link>
          <Link href="#booking">
            <a className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              Réservation
            </a>
          </Link>
          <Link href="#contact">
            <a className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
