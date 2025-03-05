import ServiceCard from "@/components/Service-card";
import Sidebar from "../components/Sidebar";

const services = [
  {
    title: "Enfermedades tratadas",
    subtitle: "Tumores",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, accusamus sint, hic molestiae ex labore officiis nam doloremque quam pariatur, iste ad. Sit, dolorem ipsam atque totam ab explicabo.",
    iconSrc: "/icons/heart-pulse.svg", // Ruta relativa desde la carpeta public
    path: "/service",
  },
  {
    title: "Degeneración macular relacionada con la edad (AMD)",
    subtitle: "Tratamientos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, accusamus sint, hic molestiae ex labore officiis nam doloremque quam pariatur, iste ad. Sit, dolorem ipsam atque totam ab explicabo.",
    iconSrc: "/icons/eye.svg", // Ruta relativa desde la carpeta public
    path: "/service",
  },
  {
    title: "Glaucoma",
    subtitle: "Tratamientos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum, accusamus sint, hic molestiae ex labore officiis nam doloremque quam pariatur, iste ad. Sit, dolorem ipsam atque totam ab explicabo.",
    iconSrc: "/icons/activity.svg", // Ruta relativa desde la carpeta public
    path: "/service",
  },
  // Agrega más servicios aquí si es necesario
];

const otherServices = [
  { name: "Síndrome del ojo seco", iconSrc: "/icons/droplets.svg" },
  { name: "Retinopatía diabética", iconSrc: "/icons/cross.svg" },
  { name: "Ojo rojo", iconSrc: "/icons/eye.svg" },
  { name: "Desprendimiento de retina", iconSrc: "/icons/eye-off.svg" },
  { name: "Estrabismo convergente (ojos bizcos)", iconSrc: "/icons/glasses.svg" },
  { name: "Cataratas", iconSrc: "/icons/sun.svg" },
  { name: "Miopía", iconSrc: "/icons/eye.svg" },
  { name: "Astigmatismo", iconSrc: "/icons/glasses.svg" },
  { name: "Conjuntivitis", iconSrc: "/icons/eye.svg" },
  { name: "Pterigión", iconSrc: "/icons/zap.svg" },
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
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherServices.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <img
                    src={service.iconSrc}
                    alt={service.name}
                    className="h-5 w-5 mr-2"
                  />
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}