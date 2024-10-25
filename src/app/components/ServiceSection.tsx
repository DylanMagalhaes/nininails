import React from "react";
import Carousel from "./Carousel";
import { Service } from "@/@Types/service";

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-gray-800 tracking-wide font-sans">
          Nos Prestations
        </h2>

        <div className="mb-12 text-gray-700 max-w-3xl mx-auto font-display text-left">
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

        {services.map((service, index) => (
          <div key={index}>
            <div
              className={`flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Carrousel d'images */}
              <div className="w-full md:w-1/2 p-4">
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Carousel images={service.images} />
                </div>
              </div>

              {/* Détails du service */}
              <div className="w-full md:w-1/2 text-left px-6">
                <h3 className="text-4xl font-medium mb-4 text-gray-900 font-sans">
                  {service.name}
                </h3>
                <p className="text-2xl text-gray-700 font-light mb-4 font-display">
                  {service.price}
                </p>
                <p className="text-lg text-gray-600 font-display">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Trait de séparation minimaliste */}
            <div className="border-b border-gray-300 my-8 mx-auto w-2/3"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
