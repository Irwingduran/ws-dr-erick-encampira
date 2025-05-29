import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"; // Asegúrate de importar Link si usas React Router
import { Eye } from "lucide-react"; // Importa el icono de ojo

const services = [
  {
    title: "Ojo Seco",
    subtitle: "Síndrome",
    iconSrc: "/img/service1.jpeg",
    path: "/service1",
  },
  {
    title: "Astigmatismo",
    subtitle: "Tratamiento",
    iconSrc: "/img/service2.jpeg",
    path: "/service2",
  },
  {
    title: "Miopía",
    subtitle: "Tratamientos",
    iconSrc: "/img/service3.jpeg",
    path: "/service3",
  },
  {
    title: "Cataratas",
    subtitle: "Tratamientos",
    iconSrc: "/img/service4.jpeg",
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
  { name: "Queratocono"},
  { name: "Trasplante de córnea"},
  { name: "Glaucoma" },

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
                  className="h-20 w-20 object-cover rounded-full bg-gray-100 p-2"
                />
                {/* Contenido del servicio */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#2D3339]">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-600">{service.subtitle}</p>
                </div>
                {/* Botón para redirigir */}
                <Link
                  to={service.path}
                  className="bg-[#1E2348] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
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