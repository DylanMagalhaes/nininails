import { services } from "@/data/prestation";
import ServicesSection from "./components/ServiceSection";
import Header from "./components/Header";
import SimpleMap from "./components/SimpleMap";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <ServicesSection services={services} />
      <SimpleMap />
    </main>
  );
}
