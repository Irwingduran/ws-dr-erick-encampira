import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 text-white bg-[#004475] p-2 rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside
        className={`fixed left-0 top-0 h-full w-full md:w-[320px] bg-[#004475] text-white flex flex-col z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col items-center pt-8 pb-12">
          <a href="/" className="w-full max-w-[250px] px-4">
            <img src="/log.avif" alt="logo" className="w-full" />
            <p className="text-gray-300 mt-2 text-center">Dr. Erick O. Encampira Luna</p>
          </a>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2 px-4">
            {[
              ["INICIO", "/"],
              ["CONÓCEME", "/about"],
              ["SERVICIOS", "/services"],
              ["CONTÁCTAME", "/contact"],
              ["RESEÑAS", "/resenas"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  to={href}
                  className={`block py-2 px-4 text-gray-300 hover:text-white transition-colors ${
                    label === "CONÓCEME" ? "text-white bg-gray-700/50" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-8 space-y-4">
          <p className="text-xl text-gray-300">
            Teléfono: <a href="tel:7222429505">722 242 9505</a>
          </p>
          <div className="text-sm text-gray-400">
            <p>
              Creado por Delta by {" "}
              <a href="https://marketingmedicos.com.mx/" className="hover:text-yellow-300">
                Imagen Médica
              </a>
            </p>
          </div>
        </div>

        <div className="p-8">
          <Link to="https://api.whatsapp.com/send/?phone=5217222429505&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0">
            <button className="w-full py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition">
              Agendar Cita
            </button>
          </Link>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
