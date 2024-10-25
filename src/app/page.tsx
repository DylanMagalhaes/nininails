import { services } from "@/data/prestation";
import ServicesSection from "./components/ServiceSection";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <ServicesSection services={services} />
    </main>
  );
}
