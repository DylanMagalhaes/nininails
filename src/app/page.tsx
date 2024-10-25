import { services } from "@/data/prestation";
import ServicesSection from "./components/serviceSection/ServiceSection";

export default function Home() {
  return (
    <div className="">
      <main>
        <ServicesSection services={services} />
      </main>
    </div>
  );
}
