import Sidebar from "../components/Sidebar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="md:ml-[320px]">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Sección Superior */}
          <section className="bg-white rounded-lg shadow-lg md:p-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-[40%] rounded-lg overflow-hidden shadow-md">
              <img
                src="/img/docAbout.jpg"
                alt="Doctor"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-[#2D3339] text-3xl md:text-4xl font-semibold mb-4">
                Soy el Dr. Erick O. Encampira Luna
              </h1>
              <p className="text-gray-600 text-lg mb-2">
                <strong>Cédula profesional:</strong> 6175744
              </p>
              <p className="text-gray-700 leading-relaxed">
                El Dr. Encampira realizó la carrera de Médico Cirujano en la
                Universidad Anáhuac, posteriormente se especializó en
                Oftalmología en la Asociación para Evitar la Ceguera en México
                IAP con reconocimiento por la UNAM. Cuenta con dos altas
                especialidades, la primera en Cirugía de Catarata y la segunda
                en Córnea y Cirugía Refractiva avaladas por la UNAM y la
                Universidad de California - Los Ángeles (UCLA).
              </p>
            </div>
          </section>

          {/* Logros Destacados */}
          <section className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-10">
            <h2 className="text-2xl font-semibold text-[#2D3339] mb-6">
              Logros Académicos y Profesionales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Neurocirujano",
                  description:
                    "Egresado del Instituto Nacional de Neurología y Neurocirugía (INNN).",
                },
                {
                  title: "Alta Especialidad",
                  description:
                    "Curso de Radioneurocirugía en el INNN, avalado por la UNAM.",
                },
                {
                  title: "Maestría y Doctorado",
                  description:
                    "Ciencias Médicas por la UNAM, además de Economía y Negocios con Gestión en Salud por la Universidad Anáhuac.",
                },
                {
                  title: "Diplomado en Harvard",
                  description:
                    "Principles and Practice of Clinical Research en la Escuela de Medicina de Harvard.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-[#2D3339] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Llamada a la Acción */}
          <section className="bg-[#1E2348] text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Contáctame
            </h2>
            <p className="text-gray-300 mb-6">
              ¿Tienes preguntas o necesitas una consulta? Estoy aquí para
              ayudarte.
            </p>
            <a
              href="tel:+525524632611"
              className="inline-block px-6 py-3 bg-white text-[#2D3339] font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
            >
              Llama al 55 2463 2611
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
