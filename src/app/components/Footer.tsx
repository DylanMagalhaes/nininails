"use client";
import React from "react";
import {
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-fuchsia-100 text-black pb-8 pt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Contactez-nous */}
        <div className="text-center">
          <h3 className="text-3xl mb-4 font-sans font-extrabold">
            Contacte-moi
          </h3>
          <p className="flex items-center justify-center mb-2 font-display">
            <FaMapMarkerAlt className="mr-2" /> Paris 19
          </p>
          <p className="flex items-center justify-center mb-2 font-display">
            <FaPhone className="mr-2" /> 06 06 06 06 06
          </p>
          <p className="flex items-center justify-center font-display">
            <FaEnvelope className="mr-2" /> nininails75@gmail.com
          </p>
        </div>

        {/* Réseaux Sociaux */}
        <div className="text-center">
          <h3 className="text-4xl mb-4 font-sans font-extrabold">Nini nails</h3>
          <p className="mb-4 font-display">
            Retrouvez-nous sur nos réseaux sociaux...
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/nininails.75/"
              aria-label="Instagram"
              className="text-black hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Horaires */}
        <div className="text-center">
          <h3 className="text-3xl mb-4 font-sans font-extrabold">Horaires</h3>
          <p className="font-display">--- Horaire à definir ici ---</p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        <p className="font-display">
          2024 All Rights Reserved © By Dylan Magalhaes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
