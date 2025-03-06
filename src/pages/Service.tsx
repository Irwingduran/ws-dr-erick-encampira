import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"; // Asegúrate de importar Link si usas React Router
import { Eye } from "lucide-react"; // Importa el icono de ojo

const services = [
  {
    title: "Ojo Seco",
    subtitle: "Síndrome",
    description:
      "El síndrome del ojo seco es una enfermedad crónica y suele ser progresiva. Ofrecemos diagnósticos precisos y tratamientos personalizados para aliviar los síntomas y mejorar la calidad de vida.",
    iconSrc: "/img/img5.jpeg",
    path: "/service1",
  },
  {
    title: "Astigmatismo",
    subtitle: "Tratamiento",
    description:
      "El astigmatismo es un error refractivo que provoca visión borrosa debido a la forma irregular de la córnea. Ofrecemos soluciones como lentes correctivos y cirugías refractivas para corregirlo.",
    iconSrc: "/img/img4.webp",
    path: "/service2",
  },
  {
    title: "Miopía",
    subtitle: "Tratamientos",
    description:
      "La miopía es un trastorno común de la visión en el que los objetos cercanos se ven claros, pero los lejanos aparecen borrosos. Ofrecemos exámenes tempranos, corrección visual y cirugías avanzadas como LASIK.",
    iconSrc: "/img/img7.jpg",
    path: "/service3",
  },
  {
    title: "Cataratas",
    subtitle: "Tratamientos",
    description:
      "Las cataratas son una condición ocular que causa la opacidad del cristalino, provocando visión borrosa. Ofrecemos diagnósticos tempranos y cirugías seguras para restaurar la visión.",
    iconSrc: "/img/img6.webp",
    path: "/service4",
  },
];

const otherServices = [
  { name: "Retinopatía diabética" },
  { name: "Ojo rojo" },
  { name: "Desprendimiento de retina" },
  { name: "Estrabismo convergente (ojos bizcos)" },
  { name: "Conjuntivitis" },
  { name: "Pterigión" },
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
              <div key={index} className="flex items-center py-6 space-x-4">
                {/* Icono del servicio */}
                <img
                  src={service.iconSrc}
                  alt={`${service.title} icon`}
                  className="h-12 w-12 object-cover rounded-full bg-gray-100 p-2"
                />
                {/* Contenido del servicio */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#2D3339]">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-600">{service.subtitle}</p>
                  <p className="mt-2 text-gray-700">{service.description}</p>
                </div>
                {/* Botón para redirigir */}
                <Link
                  to={service.path}
                  className="bg-[#2D3339] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Ver más
                </Link>
              </div>
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
                  <Eye className="h-5 w-5 mr-2 text-gray-600" /> {/* Icono agregado aquí */}
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
