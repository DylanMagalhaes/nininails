"use client";
import React, { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    if (!document.querySelector("#reviewsonmywebsite-script")) {
      const script = document.createElement("script");
      script.src =
        "https://reviewsonmywebsite.com/js/v2/embed.js?id=7bf8acda5d5930b1a9db343a4ec1b31c";
      script.id = "reviewsonmywebsite-script";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="avis" className="p-6 bg-fuchsia-100 rounded-md shadow-md">
      <h2 className="text-4xl text-center text-black font-bold mb-4 font-sans">
        Avis Google
      </h2>
      <div data-romw-token={process.env.NEXT_PUBLIC_REVIEW_KEY}></div>
    </section>
  );
};

export default GoogleReviews;
