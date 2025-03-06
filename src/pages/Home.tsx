import { Link } from "react-router-dom";
import { Phone, PhoneIcon as WhatsApp } from "lucide-react";
import { Button } from "../components/ui/button";
import Sidebar from "../components/Sidebar";
import Carousel from "@/components/Carousel";
import Mockup from "./Mockup";
import Parners from "./Partners";
import VideoCarousel from "@/components/VideoCarousel";
import { FaEye, FaGlasses } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";


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
        ¡Hola! Soy el Dr. Erick O. Encampira Luna
        </h1>
        <p className="text-lg md:text-xl">
        Oftalmólogo con una amplia experiencia en: <br /> <br />
  Cirugía Refractiva Con Láser <br />
         Cirugía Segmento Anterior <br />
  Córnea

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
            className="mt-6 bg-white text-black cursor-default hover:bg-gray-100 px-6 py-3 text-lg font-medium"
            asChild
          >
            <Link to="">Cédula profesional: 6175744</Link>
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

        <section>
          <Carousel/>
        </section>

      


        {/* Frase MMDRA */}
        <section className="mt-12 bg-gradient-to-r from-[#1A1F2C] to-gray-800 text-white p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            "Tu salud visual es nuestra prioridad"
          </h2>
          <p className="text-gray-300 text-lg">
            Confía en un equipo altamente capacitado para cuidar de tus ojos.
          </p>
        </section>
        
        
        <section className="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-10">
  <h2 className="text-2xl font-bold text-[#2D3339] mb-6 text-center">
    Nuestros Servicios
  </h2>
  <p className="text-center text-gray-600 mb-8">
    Cuidamos de tu salud visual con tratamientos especializados. Descubre cómo podemos ayudarte.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Servicio 1: Ojo Seco */}
    <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <FaEye className="h-12 w-12 mx-auto mb-4 text-[#2D3339]" />
      <h3 className="text-xl font-semibold text-[#2D3339] mb-2">Ojo Seco</h3>
      <p className="text-gray-600 mb-4">
        Tratamientos especializados para el síndrome de ojo seco. Alivio y prevención de molestias.
      </p>
      <Button
        variant="outline"
        className="bg-white hover:bg-gray-100 text-[#2D3339] border-gray-300"
        asChild
      >
        <Link to="/service1" className="font-medium">
          Saber más
        </Link>
      </Button>
    </div>

    {/* Servicio 2: Miopía */}
    <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <FaGlasses className="h-12 w-12 mx-auto mb-4 text-[#2D3339]" />
      <h3 className="text-xl font-semibold text-[#2D3339] mb-2">Miopía</h3>
      <p className="text-gray-600 mb-4">
        Diagnóstico y corrección de la miopía. Soluciones personalizadas para una visión clara.
      </p>
      <Button
        variant="outline"
        className="bg-white hover:bg-gray-100 text-[#2D3339] border-gray-300"
        asChild
      >
        <Link to="/service3" className="font-medium">
          Saber más
        </Link>
      </Button>
    </div>

    {/* Servicio 3: Astigmatismo */}
    <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <MdRemoveRedEye className="h-12 w-12 mx-auto mb-4 text-[#2D3339]" />
      <h3 className="text-xl font-semibold text-[#2D3339] mb-2">Astigmatismo</h3>
      <p className="text-gray-600 mb-4">
        Corrección del astigmatismo con técnicas avanzadas. Mejora tu calidad visual.
      </p>
      <Button
        variant="outline"
        className="bg-white hover:bg-gray-100 text-[#2D3339] border-gray-300"
        asChild
      >
        <Link to="/service2" className="font-medium">
          Saber más
        </Link>
      </Button>
    </div>
  </div>

  {/* Llamado a la acción */}
  <div className="mt-10 text-center">
    <h3 className="text-xl font-semibold text-[#2D3339] mb-4">
      ¿Necesitas más información?
    </h3>
    <p className="text-gray-600 mb-6">
      Explora todos nuestros servicios y encuentra el que mejor se adapte a tus necesidades.
    </p>
    <Button
  
      className="bg-[#2D3339] text-white hover:bg-[#1a1d20] py-3 px-8 rounded-lg font-medium"
      asChild
    >
      <Link to="/services">
        Ver todos los servicios
      </Link>
    </Button>
  </div>
</section>



        <section>
          <VideoCarousel/>
        </section>

        <section>
          <Mockup/>
        </section>
        
        <section>
          <Parners/>
        </section>


      </main>
    </div>
  );
}
