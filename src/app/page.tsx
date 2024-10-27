import { services } from "@/data/prestation";
import ServicesSection from "./components/ServiceSection";
import Header from "./components/Header";
import SimpleMap from "./components/SimpleMap";
import Contact from "./components/Contact";
import GoogleReviews from "./components/GoogleReviews";
import BookingComponent from "./components/BookingComponent";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <BookingComponent />
      <ServicesSection services={services} />
      <Contact />
      <GoogleReviews />
      <SimpleMap />
    </main>
  );
}
