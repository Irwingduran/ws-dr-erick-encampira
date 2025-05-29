import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Sidebar from "@/components/Sidebar";

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



export default function Resenas() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-white"><Sidebar />
    <main className="md:ml-[320px] p-4 md:p-12">
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
    </main>
    </div>
  );
}
