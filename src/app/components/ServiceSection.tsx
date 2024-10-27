import React from "react";
import Carousel from "./Carousel";
import { Service } from "@/@Types/service";

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-100 via-white to-indigo-100">
      <div className="container mx-auto px-6">
        {/* Titre principal */}
        <h2 className="text-6xl font-bold text-gray-800 tracking-wide font-sans text-left mb-20">
          Nos Prestations
        </h2>

        {/* Texte explicatif */}
        <div className="mb-20 max-w-3xl leading-relaxed shadow-2xl rounded-2xl bg-white p-10">
          <p className="text-lg text-gray-700 mb-6">
            Vous avez du mal à comprendre nos tarifs ? Pas de soucis, je suis là
            pour vous aider ! Chaque pose étant unique, je vous propose des
            devis personnalisés en privé. Les tarifs que vous trouverez
            ci-dessous sont indicatifs, alors n’hésitez pas à me contacter pour
            obtenir un devis précis pour votre prestation.
          </p>
          <p className="text-lg mt-4 text-gray-700">
            À noter :<br />
            - Pour une dépose réalisée par mes soins, un supplément de 5€ est à
            prévoir.
            <br />- Pour une dépose d&apos;une pose qui n&apos;a pas été
            réalisée par moi, le supplément peut varier entre 10€ et 15€, selon
            la complexité.
          </p>
        </div>

        {/* Grid des services */}
        <div className="grid gap-12 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="transition duration-500 ease-in-out transform hover:scale-105 bg-white text-gray-800 p-8 rounded-3xl shadow-2xl"
            >
              {/* Carrousel d'images */}
              <div className="mb-6 overflow-hidden rounded-2xl shadow-lg">
                <Carousel images={service.images} />
              </div>

              {/* Détails du service */}
              <div className="flex flex-col space-y-4">
                <h3 className="text-3xl font-sans font-semibold text-gray-800">
                  {service.name}
                </h3>
                <p className="text-xl font-bold text-indigo-500">
                  {service.price}
                </p>
                <ul className="list-disc list-inside text-md text-gray-700 leading-relaxed space-y-2">
                  {service.description.split(". ").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
