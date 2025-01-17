import Sidebar from "../components/Sidebar"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="md:ml-[320px] p-4 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-1 space-y-6 md:space-y-8">
              <div>
                <h1 className="text-[#2D3339] text-3xl md:text-4xl mb-4">
                  Soy el Dr. Sergio Moreno Jiménez,
                  <br className="hidden md:inline" />
                  especialista en Neurocirugía.
                </h1>
                <p className="text-gray-600">Cédula profesional: 4412196</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
              El Dr. Encampira realizó la carrera de Médico Cirujano en la Universidad Anáhuac, posteriormente se especializó en Oftalmología en la Asociación para Evitar la Ceguera en México IAP con reconocimiento por la UNAM. Cuenta con dos altas especialidades, la primera en Cirugía de Catarata y la segunda en Córnea y Cirugía Refractiva avaladas por la UNAM y la Universidad de California - Los Ángeles (UCLA). Actualmente se encuentra certificado por el Consejo Mexicano de Oftalmología y es miembro activo del Centro Mexicano de ambas altas especialidades.
              </p>

              <ul className="space-y-4 md:space-y-6 text-gray-700">
                <li>• Neurocirujano egresado del Instituto Nacional de Neurología y Neurocirugía (INNN)</li>
                <li>• Curso de Alta Especialidad en Radioneurocirugía en INNN</li>
                <li>• Maestría y Doctorado en Ciencias Médicas por la Universidad Nacional Autónoma de México. Maestría en Economía y Negocios con Gestión en Salud por la Universidad Anáhuac.</li>
                <li>• Diplomado en Investigación Clínica por la Escuela de Medicina de Harvard (Principles and Practice of Clinical Research)</li>
              </ul>
            </div>

            <div className="w-full md:w-[400px] h-[300px] relative">
              <img
                src="/placeholder.jpg"
                alt="Doctor examining brain scans"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}