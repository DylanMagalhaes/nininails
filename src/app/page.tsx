import ServicesSection from "./components/serviceSection/ServiceSection";

export default function Home() {
  const services = [
    {
      name: "CIL À CIL",
      price: "60€",
      images: [
        {
          src: "https://via.placeholder.com/500x300?text=Image+1",
          alt: "Image 1",
        },
        {
          src: "https://via.placeholder.com/500x300?text=Image+2",
          alt: "Image 2",
        },
        {
          src: "https://via.placeholder.com/500x300?text=Image+3",
          alt: "Image 3",
        },
      ],
    },
    // Autres services...
  ];
  return (
    <div className="">
      <main>
        <ServicesSection services={services} />
      </main>
    </div>
  );
}
