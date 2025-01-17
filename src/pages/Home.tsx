import { Link } from "react-router-dom"
import { Phone, PhoneIcon as WhatsApp } from 'lucide-react'
import { Button } from "../components/ui/button"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="md:ml-[320px] p-4 md:p-12">
        <div className="bg-[#1A1F2C] text-white py-8 md:py-16 px-4 md:px-12 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium mb-6 md:mb-8 text-center">AGENDA UNA CITA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 h-auto py-4 w-full"
                asChild
              >
                <Link to="tel:7222429505" className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">Citas</span>
                  </div>
                  <div className="text-xl font-medium">722 242 9505</div>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 h-auto py-4 w-full"
                asChild
              >
                <Link to="tel:7222429505" className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-10 w-10" />
                    <span className="text-sm">Urgencias</span>
                  </div>
                  <div className="text-xl font-medium">722 242 9505</div>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 h-auto py-4 w-full"
                asChild
              >
                <Link to="https://api.whatsapp.com/send/?phone=5217222429505&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0" className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <WhatsApp className="h-5 w-5" />
                    <span className="text-xl font-medium">Whatsapp</span>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-12 py-8 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h1 className="text-[#2D3339] text-3xl md:text-3xl mb-4">
                    Soy el Dr. Erick O. Encampira Luna,
                    
                    especialista en Oftalmología.
                  </h1>
                  <p className="text-gray-600">Cédula profesional: 6175744</p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Me preocupo por evaluar la situación de cada paciente en forma
                  personalizada, con la finalidad de poder hacer un diagnóstico
                  preciso y oportuno. <br /> Esto me permitirá ofrecer un tratamiento
                  adecuado a cada paciente. Lo más
                  importante es siempre pensar en lograr ofrecer la mejor calidad
                  de vida para cada paciente.
                </p>

                <ul className="space-y-4 text-gray-700">
                  <li>• Miembro activo de la Sociedad Mexicana de Oftalmología, SMO, 2015.</li>
                  <li>• Miembro de la ESCRS, European Society of Cataract & Refractive Surgeons, 2014.</li>
                  <li>• Médico Adscrito de Segmento Anterior y Catarata, APEC / Asociación para Evitar la Ceguera en México, 2015.</li>
                  <li>• Especialista en Córnea, Catarata, y Cirugía refractiva, Stein Eye Institute - University of California, Los Angeles (UCLA), 2018.</li>
                </ul>
              </div>

              <div className="relative aspect-4/3 w-full">
                <img
                  src="/img/img1.jpg"
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