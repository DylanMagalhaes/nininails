"use client";
import React, { useEffect } from "react";

const SimpleMap: React.FC = () => {
  useEffect(() => {
    // Remplacez par votre propre clé API Google Maps
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    // Charger le script de l'API Google Maps si ce n'est pas déjà fait
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, []);

  const initializeMap = () => {
    const map = new window.google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: 48.88749973851881, lng: 2.3921169953522217 }, // Coordonnées de NININAILS
        zoom: 17,
      },
    );

    new window.google.maps.Marker({
      position: { lat: 48.88749973851881, lng: 2.3921169953522217 },
      map,
      title: "NININAILS",
    });
  };

  return <div id="map" style={{ height: "40vh", width: "100%" }} />;
};

export default SimpleMap;
