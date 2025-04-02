import ScrollToTop from "../components/ScrollToTop";
import Sidebar from "../components/Sidebar";

export default function ServiceDetails() {
  const service = {
    title: "Síndrome del ojo seco",
    subtitle: "Tratamientos y manejo avanzado",
    description: "El síndrome del ojo seco es una enfermedad crónica y suele ser progresiva. Generalmente, el ojo seco se produce por un déficit de lágrima (escasa producción o excesiva evaporación) o porque esta es de mala calidad debido a problemas como la disfunción de las glándulas de Meibomio o la blefaritis. Además, suele ir asociado a diferentes grados de inflamación.",
    iconSrc: "/img/service1.jpeg",
    details: [
      "Diagnóstico temprano mediante pruebas especializadas.",
      "Tratamientos no invasivos con tecnología de punta.",
      "Seguimiento personalizado para evitar progresión de la enfermedad.",
      "Uso de lágrimas artificiales y otros productos lubricantes.",
    ],
  };

  const faqs = [
    {
      question: "¿Qué es el síndrome del ojo seco?",
      answer: "El síndrome del ojo seco es una condición en la que los ojos no producen suficientes lágrimas o estas son de mala calidad, lo que resulta en sequedad, irritación y otros síntomas.",
    },
    {
      question: "¿Cuáles son los síntomas del ojo seco?",
      answer: "Los síntomas incluyen ardor o comezón en los ojos, enrojecimiento, sensación de cuerpo extraño, intolerancia al uso de lentes de contacto, visión borrosa y mayor sensibilidad a la luz.",
    },
    {
      question: "¿Cómo se diagnostica el ojo seco?",
      answer: "El diagnóstico se realiza mediante un examen ocular exhaustivo, pruebas para medir el volumen y la calidad de las lágrimas, prueba de osmolaridad lagrimal y muestras de lágrimas para buscar marcadores.",
    },
    {
      question: "¿Cómo se trata el ojo seco?",
      answer: "El tratamiento puede incluir el uso de lágrimas artificiales, geles, ungüentos y otros productos lubricantes. En casos más severos, se pueden recomendar tratamientos médicos específicos.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop/>
      <Sidebar />
      <main className="md:ml-[320px] p-4 md:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Header mejorado */}
          <header className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img 
                  src="/img/service1.jpeg" 
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-[#2D3339] mb-3">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </header>

          {/* Descripción del servicio */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2D3339]">
              {service.subtitle}
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">{service.description}</p>
            <ul className="mt-6 list-disc pl-6 space-y-2">
              {service.details.map((detail, index) => (
                <li key={index} className="text-gray-600">
                  {detail}
                </li>
              ))}
            </ul>
          </section>

          {/* Sección de video destacado */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2D3339] mb-6">
              Video informativo sobre el síndrome del ojo seco
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-[267px] md:max-w-[400px] lg:max-w-[500px]">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F412562390854712%2F&show_text=false&width=267&t=0"
                  width="100%"
                  height="800"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
        
          </section>


          {/* Preguntas frecuentes */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2D3339] mb-4">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-700">{faq.question}</h3>
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Botón de acción */}
          <section className="text-center">
            <a href="https://api.whatsapp.com/send/?phone=5217222429505&text=Hola+Dr.+encontr%C3%A9+su+sitio+wen+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0" target="_blank">
              <button className="bg-yellow-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#4A5568] transition">
                Agendar cita por WhatsApp
              </button>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
