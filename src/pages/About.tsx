import Sidebar from "@/components/Sidebar"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="ml-[320px] p-12">
        <div className="max-w-4xl">
          <div className="flex gap-12 items-start">
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-[#2D3339] text-4xl mb-4">
                  Soy el Dr. Sergio Moreno Jiménez,
                  <br />
                  especialista en Neurocirugía.
                </h1>
                <p className="text-gray-600">Cédula profesional: 4412196</p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Me preocupo por evaluar la situación de cada paciente en forma personalizada, con la finalidad de poder hacer un diagnóstico preciso y oportuno. Esto me permitirá ofrecer un tratamiento adecuado a cada paciente y, en caso necesario, hacer un abordaje diagnóstico y terapéutico en forma multidisciplinaria. Lo más importante es siempre pensar en lograr ofrecer la mejor calidad de vida para cada paciente.
              </p>

              <ul className="space-y-6 text-gray-700">
                <li>• Neurocirujano egresado del Instituto Nacional de Neurología y Neurocirugía (INNN)</li>
                <li>• Curso de Alta Especialidad en Radioneurocirugía en INNN</li>
                <li>• Maestría y Doctorado en Ciencias Médicas por la Universidad Nacional Autónoma de México. Maestría en Economía y Negocios con Gestión en Salud por la Universidad Anáhuac.</li>
                <li>• Diplomado en Investigación Clínica por la Escuela de Medicina de Harvard (Principles and Practice of Clinical Research)</li>
              </ul>
            </div>

            <div className="w-[400px] h-[300px] relative">
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