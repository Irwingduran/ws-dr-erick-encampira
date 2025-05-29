import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    ["INICIO", "/"],
    ["CONÓCEME", "/about"],
    ["SERVICIOS", "/services"],
    ["CONTÁCTAME", "/contact"],
    ["RESEÑAS", "/resenas"],
  ];

  return (
    <>
      {/* Botón móvil */}
      <button
        className="fixed top-4 right-4 z-50 text-white bg-[#1E2348] p-2 rounded-md shadow-lg md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir o cerrar menú lateral"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
className={`fixed left-0 top-0 h-full w-full md:w-[320px] bg-[#1E2348] text-white flex flex-col z-40 transform transition-transform duration-300 ease-in-out ${
  isOpen ? "translate-x-0" : "-translate-x-full"
} md:translate-x-0`}
>
        {/* Logo */}
        <div className="flex flex-col items-center pt-10 pb-6 border-b border-white/10">
          <a href="/" className="w-full max-w-[250px] px-4">
            <img src="/log.avif" alt="Logo del Dr." className="w-full rounded-md" />
            <p className="text-gray-300 mt-2 text-center text-sm font-light">
              Dr. Erick O. Encampira Luna
            </p>
          </a>
        </div>

        {/* Navegación */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 px-4 pt-6">
            {navItems.map(([label, href]) => {
              const isActive = location.pathname === href;
              return (
                <li key={label}>
                  <Link
                    to={href}
                    className={`block py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Información de contacto */}
        <div className="p-6 border-t border-white/10 space-y-4">
          <p className="text-sm text-gray-300">
            Teléfono:{" "}
            <a href="tel:7222429505" className="hover:text-white">
              722 242 9505
            </a>
          </p>
          <p className="text-xs text-gray-400">
            Creado por Delta de{" "}
            <a
              href="https://marketingmedicos.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 underline"
            >
              Imagen Médica
            </a>
          </p>
        </div>

        {/* CTA */}
        <div className="p-6">
          <Link
            to="https://api.whatsapp.com/send/?phone=5217222429505&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition-colors text-sm">
              Agendar Cita
            </button>
          </Link>
        </div>
      </aside>

      {/* Capa oscura detrás del sidebar móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}


