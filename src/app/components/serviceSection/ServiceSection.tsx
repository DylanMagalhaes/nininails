import React from "react";
import Carousel from "../carousel/Carousel";

// Type pour les images
interface Image {
  src: string;
  alt: string;
}

// Type pour les services
interface Service {
  name: string;
  price: string;
  images: Image[];
}

// Correction du type de props
interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Nos prestations</h2>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Section de gauche - Liste des prestations */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl font-bold mb-4">EXTENSIONS DE CILS</h3>
            <ul className="space-y-2 text-gray-700">
              {services.map((service, index) => (
                <li key={index} className="flex justify-between">
                  <span>{service.name}</span>
                  <span>{service.price}</span>
                </li>
              ))}
              <li className="mt-4">
                <span className="text-gray-600 text-sm">
                  *OFFRE ÉTUDIANTE : -10€ (sous réserve d'un justificatif,
                  valable pour les poses mixte et volume russe)
                </span>
              </li>
            </ul>
          </div>

          {/* Section de droite - Carrousel d'images */}
          <div className="w-full md:w-1/2">
            {services.map((service, index) => (
              <div key={index} className="mb-8">
                <h4 className="text-xl font-semibold mb-4">{service.name}</h4>
                <Carousel images={service.images} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
