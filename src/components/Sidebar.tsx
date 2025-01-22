import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[320px] bg-[#2D3339] text-white flex flex-col z-40 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {/* Header Section */}
        <div className="flex flex-col items-center pt-8 pb-12">
          <a href="/"><img src="/log.avif" alt="logo" width={250} />
          <p className="text-gray-300 mt-2">Dr. Erick O. Encampira Luna</p></a>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2 px-4">
            {[
              ['INICIO', '/'],
              ['CONÓCEME', '/about'],
              ['SERVICIOS', '/services'],
              ['CONTÁCTAME', '/contact'],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  to={href}
                  className={`block py-2 px-4 text-gray-300 hover:text-white transition-colors ${
                    label === 'CONÓCEME' ? 'text-white bg-gray-700/50' : ''
                  }`}
                  onClick={() => setIsOpen(false)} // Close sidebar on link click
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Section */}
        <div className="p-8 space-y-4">
          <p className="text-xl text-gray-300">Teléfono: <a href="tel:7222429505">722 242 9505</a></p>
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              Creado por  <a href="https://delta-digital.com.mx/" className='hover:text-yellow-300'>Agencia Delta</a>
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)} // Close sidebar on overlay click
        />
      )}
    </>
  );
}
