import { Brain } from 'lucide-react'
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[320px] bg-[#2D3339] text-white flex flex-col">
      <div className="flex flex-col items-center pt-8 pb-12">
        <Brain className="w-16 h-16 mb-4" />
        <h1 className="text-2xl font-medium">Dr. Sergio Moreno</h1>
        <h2 className="text-xl">Jiménez</h2>
        <p className="text-gray-300 mt-2">Neurocirujano</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          {[
            ["INICIO", "/"],
            ["CONÓCEME", "/about"],
            ["SERVICIOS", "/services"],
            ["ENFERMEDADES", "/diseases"],
            ["BLOG", "/blog"],
            ["CONTÁCTAME", "/contact"],
          ].map(([label, href]) => (
            <li key={label}>
              <Link
                to={href}
                className={`block py-2 px-4 text-gray-300 hover:text-white transition-colors ${
                  label === "CONÓCEME" ? "text-white bg-gray-700/50" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-8 space-y-4">
        <p className="text-xl text-gray-300">Teléfono: 55 2463 2611</p>
        <div className="text-sm text-gray-400 space-y-2">
          <p>
            Creado por Dr.Digital - Especialistas en
            <br />
            Marketing Médico
          </p>
          <p>Cookies</p>
        </div>
      </div>
    </aside>
  )
}