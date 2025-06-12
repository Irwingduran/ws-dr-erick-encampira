import { Link } from "react-router-dom";
import { Phone, PhoneIcon as WhatsApp } from "lucide-react";
import { Button } from "../components/ui/button";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "@/components/ScrollToTop";
import Carousel from "@/components/Carousel";
import Mockup from "./Mockup";
import Parners from "./Partners";
import VideoCarousel from "@/components/VideoCarousel";
import { FaEye, FaGlasses } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Eye } from "lucide-react";


const otherServices = [
  { name: "Retinopatía diabética" },
  { name: "Ojo rojo" },
  { name: "Desprendimiento de retina" },
  { name: "Estrabismo convergente (ojos bizcos)" },
  { name: "Conjuntivitis" },
  { name: "Pterigión" },
  { name: "Queratocono"},
  { name: "Trasplante de córnea"},
  { name: "Glaucoma" },

]; 
const reviews = [
  {
    name: "María López",
    comment: "El Dr. Encampira es un excelente profesional. Mi operación fue un éxito total. ¡Recomendado!",
    rating: 5,
  },
  {
    name: "Carlos García",
    comment: "Recibí un trato muy humano y profesional. Mi vista ha mejorado muchísimo. Gracias, doctor.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    comment: "El diagnóstico fue preciso y el tratamiento efectivo. El mejor oftalmólogo que he conocido.",
    rating: 5,
  },
  {
    name: "Aidee Jiménez Reyes",
    comment:"Yo llegue muy mal con presión ocular de entre 34 y 36, 3 antibióticos, 1 lubricante, con 5 bolitas en el ojo, una operación mal hecha y casi ciega. El doctor me propuso un nuevo tratamiento, vi resultados después de 3 sesiones y hoy después de 3 años mis ojos están sanos.",
    rating: 5,
  },
  {
    name: "Jazmín Betzabé",
    comment:"Estoy contenta con los resultados de mi cirugía Femtolasik, los cuales noté desde el primer día. También me siento agradecida con el Dr. Encampira y su equipo de trabajo, quienes me acompañaron durante todo el proceso con profesionalismo y atención.",
    rating: 5,
  },
  {
    name: "Alicia Ramos",
    comment:"Excelente atención por parte del Dr. Erick Encampira, mi cirugía fue implante de lentes intraoculares en ambos ojos el procedimiento fue un éxito, con excelentes resultados. Continúo con mi tratamiento satisfactoriamente de los mejores Doctores de la zona. Las instalaciones del consultorio como de la clínica de cirugías son de alta vanguardia; con instrumentales de primera generación, la atención del personal es excelente muy amables, altamente capacitados. En general lo recomiendo ampliamente es un excelente doctor con excelente resultados.",
    rating: 5,
  },
  {
    name: "Janet Vivero",
    comment:"Excelente Oftalmólogo, Dios lo bendiga por sus conocimientos, después de qué ningún oftalmólogo me diagnosticaba bien y al contrario, me empeoraban, el Doctor Encampira con sus conocimientos me ha dado un excelente tratamiento para el glaucoma que tengo, es atinado, explica excelente, honesto, humano y te da confianza, gracias a Dios lo encontré y no lo soltaré, lo recomiendo apliamente.",
    rating: 5,
  },
  {
    name: "Krmlyta Uribe",
    comment:"Ampliamente recomendable el Dr. Erick Encampira, la cirugía refractiva que me realizó fue un éxito, el personal muy profesional, las instalaciones muy adecuadas a las necesidades del paciente. Desde la primera consulta te hace una valoración minuciosa y te explica detalladamente cuál es el problema ocular que tiene el paciente, durante la cirugía es muy humano y también el personal que lo ayuda, después de la cirugía y los protocolos de atención son excelentes.",
    rating: 5,
  },
  {
    name: "Sergio Pérez",
    comment:"Todo un éxito mis lentes intraoculares derivado de una cirugía de cataratas. El cirujano y su equipo siempre al pendiente. Los estudios con equipo de alta tecnología e instalaciones súper limpias.",
    rating: 5,
  },
  {
    name: "Eduardo Sánchez",
    comment:"Excelente servicio profesional por parte del Dr. Erick y todo su equipo de trabajo, mi esposa y yo hemos quedado satisfechos con los resultados obtenidos después de la cirugía de estrabismo.",
    rating: 5,
  },
  {
    name: "Sebastian Matías",
    comment:"Quiero expresar mi mas profundo agradecimiento por la operación laser que me realizó.Tenia altas espectativas y usted no solo las cumplió , sino que las superó. Muchas gracias Dr Encampira y equipo.",
    rating: 5,
  },
  {
    name: "Daniela Chavez",
    comment:"La atención es muy buena, la cirugía fue un éxito.",
    rating: 5,
  },
  {
    name: "Giovanni Palacios",
    comment:"Todo muy bien con mi cirugía me realicé cirugía refractiva y mi visión está al 100, recomiendo mucho al Dr Erick mucha atención y explica totalmente el proceso a realizar, siempre atento a todo.",
    rating: 5,
  },
  {
    name: "Gabbi Beltran",
    comment:"Muy buenos resultados de la cirugía de cataratas. La atención del médico y de todo el personal que lo asiste es inmejorable. Muy atento y claro.",
    rating: 5,
  },
  {
    name: "Claudia Cruz Alcantara",
    comment:"Excelente servicio, son muy profesionales. Me realicé cirugía Femtolasik y todo salió súper bien. Mi visión ha mejorado.",
    rating: 5,
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
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
        <div className="p-6">
          <Link
            to="https://api.whatsapp.com/send/?phone=5217222429505&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[200px] py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition-colors text-sm">
              Agendar Cita
            </button>
          </Link>
        </div>
      </div>
    </div>
    
     </section>

        {/* Sección de Bienvenida */}
        <section className="bg-[#1E2348] text-white shadow-lg p-8 md:p-12 text-center">
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
                to="https://api.whatsapp.com/send/?phone=5217222429505&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0"
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
        <section className="mt-12 bg-[#1E2348] text-white p-8 md:p-12 text-center">
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

  <div className="grid grid-cols-4 md:grid-cols-2 gap-6">
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

     {/* Servicio 4: Cataratas */}
     <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <MdRemoveRedEye className="h-12 w-12 mx-auto mb-4 text-[#2D3339]" />
      <h3 className="text-xl font-semibold text-[#2D3339] mb-2">Cataratas</h3>
      <p className="text-gray-600 mb-4">
        Diagnóstico y tratamiento de cataratas. Mejora tu calidad visual con cirugía láser.
      </p>
      <Button
        variant="outline"
        className="bg-white hover:bg-gray-100 text-[#2D3339] border-gray-300"
        asChild
      >
        <Link to="/service4" className="font-medium">
          Saber más
        </Link>
      </Button>
    </div>
  </div>

     {/* Otros Servicios */}
     <div className="mt-12">
            <h2 className="text-2xl md:text-3xl text-[#2D3339] mb-4">
              Otros Servicios
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherServices.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Eye className="h-5 w-5 mr-2 text-gray-600" /> {/* Icono agregado aquí */}
                  {service.name}
                </li>
              ))}
            </ul>
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
  
      className="bg-yellow-400 text-white hover:bg-yellow-300 py-3 px-8 rounded-lg font-medium"
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
      
           <section className="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-10">
             <h2 className="text-2xl font-bold text-[#2D3339] mb-6 text-center">
               Lo que dicen nuestros pacientes
             </h2>
             <div className="relative flex items-center justify-center">
               <button
                 onClick={handlePrev}
                 className="absolute left-10 p-2 bg-gray-200 opacity-40 rounded-full hover:bg-gray-500 focus:outline-none"
               >
                 <ChevronLeft className="h-6 w-6 text-gray-700" />
               </button>
               <div className="w-full md:w-3/5 text-center space-y-4">
                 <div className="w-20 h-20 mx-auto rounded-full  flex items-center justify-center border-2 border-[#2D3339]">
                   <img src="/logo.png" className="h-10 w-10 text-[#2D3339]" />
                 </div>
                 <div className="flex justify-center">
                   {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                     <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                   ))}
                 </div>
                 <p className="text-lg text-gray-700 italic">"{reviews[currentIndex].comment}"</p>
                 <p className="text-gray-900 font-bold">{reviews[currentIndex].name}</p>
               </div>
               <button
                 onClick={handleNext}
                 className="absolute right-10 p-2 bg-gray-200 opacity-40 rounded-full hover:bg-gray-500 focus:outline-none"
               >
                 <ChevronRight className="h-6 w-6 text-gray-700" />
               </button>
             </div>
             <div className="mt-8 bg-[#1E2348] p-6 rounded-lg text-center">
               <h3 className="text-xl font-bold text-white mb-4">
                 ¡Tu opinión es importante para nosotros!
               </h3>
               <p className="text-white mb-4">
                 Ayuda a otros pacientes a conocer la experiencia con el Dr. Encampira dejando tu comentario en su perfil de Google.
               </p>
               <a
                 href="https://www.google.com.mx/maps/place/Dr.+Erick+Encampira+-+Oftalmologo+en+Toluca/@19.276308,-99.6636278,17z/data=!4m8!3m7!1s0x85cd893916219e3f:0xd17e0352e1bfd77a!8m2!3d19.276308!4d-99.6610529!9m1!1b1!16s%2Fg%2F11fldp9srk?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block bg-white text-[#2D3339] px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors"
               >
                 Dejar un comentario
               </a>
             </div>
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
