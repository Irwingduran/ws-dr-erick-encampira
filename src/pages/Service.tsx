import ServiceCard from "@/components/Service-card";
import Sidebar from "../components/Sidebar";

const services = [
  {
    title: "Enfermedades tratadas",
    subtitle: "Tumores",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, accusamus sint, hic molestiae ex labore officiis nam doloremque quam pariatur, iste ad. Sit, dolorem ipsam atque totam ab explicabo.",
    iconSrc: "/placeholder.svg",
    path: "/service",
  },
  {
    title: "Degeneración macular relacionada con la edad (AMD)",
    subtitle: "Tratamientos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, accusamus sint, hic molestiae ex labore officiis nam doloremque quam pariatur, iste ad. Sit, dolorem ipsam atque totam ab explicabo.",
    iconSrc: "/placeholder.svg",
    path: "/service",
  },
  {
    title: "Glaucoma.",
    subtitle: "Tratamientos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, accusamus sint, hic molestiae ex labore officiis nam doloremque quam pariatur, iste ad. Sit, dolorem ipsam atque totam ab explicabo.",
    iconSrc: "/placeholder.svg",
    path: "/service",
  },
  // ... add the rest of the services here
];

const otherServices = [
  "Síndrome del ojo seco",
  "Retinopatía diabética",
  "Ojo rojo",
  "Desprendimiento de retina",
  "Estrabismo convergente (ojos bizcos)",
  "Cataratas",
  "Miopía",
  "Astigmatismo",
  "Conjuntivitis",
  "Pterigión",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="md:ml-[320px] p-4 md:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Servicios Principales */}
          <h1 className="text-3xl md:text-4xl text-[#2D3339] mb-6 md:mb-8">
            Servicios
          </h1>
          <div className="divide-y divide-gray-200">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Otros Servicios */}
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl text-[#2D3339] mb-4">
              Otros Servicios
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-5">
              {otherServices.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
