"use client";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Presentation = () => {
  return (
    <section className="container w-60 justify-center text-start mb-14 md:w-full max-w-lg  flex flex-col md:justify-between">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 font-sans motion-preset-slide-right motion-delay-[700ms]">
        La beauté commence au bout des ongles
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-start motion-preset-slide-right motion-delay-[800ms]">
        <Link
          href="/register"
          className="flex items-center bg-fuchsia-200 text-black font-bold px-3 sm:px-3 py-3 rounded-2xl hover:scale-110 ease-out duration-300"
        >
          <p className="mr-4 font-bold font-display">Réservation</p>
          <IoIosArrowForward size={22} />
        </Link>
      </div>
    </section>
  );
};

export default Presentation;
