import React from "react";
import Carousel from "./Carousel";
import { Service } from "@/@Types/service";

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="py-16 bg-fuchsia-100 text-left">
      <div className="container mx-auto">
        {/* Titre principal */}
        <h2 className="text-4xl font-semibold mb-12 text-gray-800 tracking-wider font-sans text-center">
          Nos Prestations
        </h2>

        {/* Texte explicatif */}
        <div className="mb-12 text-gray-700 max-w-4xl mx-auto font-display text-center md:text-left leading-relaxed">
          <p className="text-lg mb-4">
            Vous avez du mal à comprendre nos tarifs ? Pas de soucis, je suis là
            pour vous aider ! Chaque pose étant unique, je vous propose des
            devis personnalisés en privé. Les tarifs que vous trouverez
            ci-dessous sont indicatifs, alors n’hésitez pas à me contacter pour
            obtenir un devis précis pour votre prestation.
          </p>
          <p className="text-lg">
            À noter : <br />
            - Pour une dépose réalisée par mes soins, un supplément de 5€ est à
            prévoir.
            <br />- Pour une dépose d&apos;une pose qui n&apos;a pas été
            réalisée par moi, le supplément peut varier entre 10€ et 15€, selon
            la complexité.
          </p>
        </div>

        {/* Services */}
        {services.map((service, index) => (
          <div key={index} className="max-w-7xl mx-auto">
            <div
              className={`flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Carrousel d'images */}
              <div className="w-full md:w-1/2 p-4">
                <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                  <Carousel images={service.images} />
                </div>
              </div>

              {/* Détails du service */}
              <div className="w-full md:w-1/2 px-6">
                <h3 className="text-4xl font-bold mb-4 text-gray-900 font-sans leading-tight">
                  {service.name}
                </h3>
                <p className="text-2xl text-gray-700 font-light mb-4 font-display">
                  {service.price}
                </p>
                <p className="text-lg text-gray-600 font-display leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Trait de séparation minimaliste */}
            <div className="border-b border-gray-200 my-8 mx-auto w-2/3"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
