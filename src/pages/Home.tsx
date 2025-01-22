import { Link } from "react-router-dom";
import { Phone, PhoneIcon as WhatsApp } from "lucide-react";
import { Button } from "../components/ui/button";
import Sidebar from "../components/Sidebar";
import ReviewCarousel from "@/components/ReviewCarousel";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="md:ml-[320px]">
      {/* Imagen de Fondo */}
     <section 
    className="relative h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/img/img2.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white">
      <div className="px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Dr. Erick O. Encampira Luna
        </h1>
        <p className="text-lg md:text-xl">
         ¡Bienvenido a mi consulta! Cuida tu salud visual con el mejor equipo médico.
        </p>
      </div>
    </div>
     </section>

        {/* Sección de Bienvenida */}
        <section className="bg-[#1A1F2C] text-white shadow-lg p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Bienvenido a la consulta del Dr. Erick O. Encampira Luna
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Especialista en Oftalmología, comprometido con tu salud visual.
          </p>
          <Button
            variant="outline"
            className="mt-6 bg-white text-black hover:bg-gray-100 px-6 py-3 text-lg font-medium"
            asChild
          >
            <Link to="/about">Conoce más sobre mi práctica</Link>
          </Button>
        </section>

        {/* Sección de Citas */}
        <section className="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-bold text-[#2D3339] mb-6 text-center">
            Agenda tu cita de forma fácil
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="bg-gray-100 hover:bg-gray-200 h-auto py-6 w-full"
              asChild
            >
              <Link to="tel:7222429505" className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-2 text-[#2D3339]" />
                <span className="text-sm font-medium">Citas Generales</span>
                <div className="text-lg font-bold">722 242 9505</div>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="bg-gray-100 hover:bg-gray-200 h-auto py-6 w-full"
              asChild
            >
              <Link to="tel:7222429505" className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-2 text-[#2D3339]" />
                <span className="text-sm font-medium">Urgencias</span>
                <div className="text-lg font-bold">722 242 9505</div>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="bg-gray-100 hover:bg-gray-200 h-auto py-6 w-full"
              asChild
            >
              <Link
                to="https://api.whatsapp.com/send/?phone=5217222429505&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
                className="flex flex-col items-center"
              >
                <WhatsApp className="h-8 w-8 mb-2 text-[#2D3339]" />
                <span className="text-sm font-medium">WhatsApp</span>
                <div className="text-lg font-bold">Envíanos un mensaje</div>
              </Link>
            </Button>
          </div>
        </section>

        {/* Sección Informativa */}
        <section className="mt-12 bg-gray-100 rounded-lg shadow-lg p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Texto */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#2D3339]">
                Soy el Dr. Erick O. Encampira Luna, especialista en Oftalmología.
              </h2>
              <p className="text-gray-600">Cédula profesional: 6175744</p>
              <p className="text-gray-700 leading-relaxed">
                Me preocupo por evaluar la situación de cada paciente en forma
                personalizada, con la finalidad de poder hacer un diagnóstico
                preciso y oportuno. Esto me permitirá ofrecer un tratamiento
                adecuado a cada paciente. Lo más importante es siempre pensar en
                lograr ofrecer la mejor calidad de vida para cada paciente.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li>
                  • Miembro activo de la Sociedad Mexicana de Oftalmología, SMO,
                  2015.
                </li>
                <li>
                  • Miembro de la ESCRS, European Society of Cataract &
                  Refractive Surgeons, 2014.
                </li>
                <li>
                  • Médico Adscrito de Segmento Anterior y Catarata, APEC /
                  Asociación para Evitar la Ceguera en México, 2015.
                </li>
                <li>
                  • Especialista en Córnea, Catarata, y Cirugía refractiva,
                  Stein Eye Institute - University of California, Los Angeles
                  (UCLA), 2018.
                </li>
              </ul>
            </div>

            {/* Imagen */}
            <div className="relative aspect-4/3 w-full">
              <img
                src="/img/img1.jpg"
                alt="Dr. Erick O. Encampira Luna"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Frase MMDRA */}
        <section className="mt-12 bg-gradient-to-r from-[#2D3339] to-gray-800 text-white p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            "Tu salud visual es nuestra prioridad"
          </h2>
          <p className="text-gray-300 text-lg">
            Confía en un equipo altamente capacitado para cuidar de tus ojos.
          </p>
        </section>
        <section>
          <VideoSection/>
        </section>
        <section>
          <ReviewCarousel/>
        </section>
        

      </main>
    </div>
  );
}
