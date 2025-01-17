import { Link } from "react-router-dom"
import { Phone, PhoneIcon as WhatsApp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/Sidebar"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="ml-[320px]">
        {/* Header with appointment section */}
        <div className="bg-[#1A1F2C] text-white py-16 px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-medium mb-8 text-center">AGENDA UNA CITA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 h-auto py-4"
                asChild
              >
                <Link to="tel:5524632611" className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">Hospital ABC Observatorio</span>
                  </div>
                  <div className="text-xl font-medium">55 2463 2611</div>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 h-auto py-4"
                asChild
              >
                <Link to="tel:5516647266" className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">Hospital ABC Santa Fe</span>
                  </div>
                  <div className="text-xl font-medium">55 1664 7266</div>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 h-auto py-4"
                asChild
              >
                <Link to="https://wa.me/525524632611" className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <WhatsApp className="h-5 w-5" />
                    <span className="text-xl font-medium">Whatsapp</span>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="px-12 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h1 className="text-[#2D3339] text-4xl mb-4">
                    Soy el Dr. Sergio Moreno Jiménez,
                    <br />
                    especialista en Neurocirugía.
                  </h1>
                  <p className="text-gray-600">Cédula profesional: 4412196</p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Me preocupo por evaluar la situación de cada paciente en forma
                  personalizada, con la finalidad de poder hacer un diagnóstico
                  preciso y oportuno. Esto me permitirá ofrecer un tratamiento
                  adecuado a cada paciente y, en caso necesario, hacer un abordaje
                  diagnóstico y terapéutico en forma multidisciplinaria. Lo más
                  importante es siempre pensar en lograr ofrecer la mejor calidad
                  de vida para cada paciente.
                </p>

                <ul className="space-y-4 text-gray-700">
                  <li>• Neurocirujano egresado del Instituto Nacional de Neurología y Neurocirugía (INNN)</li>
                  <li>• Curso de Alta Especialidad en Radioneurocirugía en INNN</li>
                </ul>
              </div>

              <div className="relative aspect-4/3 w-full">
                <img
                  src="/placeholder.jpg"
                  alt="Doctor examining brain scans"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}