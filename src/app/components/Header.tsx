import { Image } from "@/@Types/service";
import Carousel from "./Carousel";
import Presentation from "./Presentation";

const Header = () => {
  const images: Image[] = [
    {
      src: "https://via.placeholder.com/500x300?text=Manucure+1",
      alt: "Manucure avec design minimaliste",
    },
    {
      src: "https://via.placeholder.com/500x300?text=Manucure+2",
      alt: "Manucure avec finition française",
    },
    {
      src: "https://via.placeholder.com/500x300?text=Manucure+3",
      alt: "Manucure avec vernis coloré brillant",
    },
  ];
  return (
    <div
      className="flex bg-slate-950 flex-col md:flex-row justify-between items-center h-auto md:min-h-screen pt-16 pb-16 px-4 md:px-32 md:bg-cover md:bg-center"
      // style={{
      //   backgroundImage: "url('/images/flexfi-crypto-payment.webp')",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Presentation />
      </div>
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Header;
