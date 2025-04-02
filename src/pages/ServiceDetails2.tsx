import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
export default function ServiceDetails() {
  const service = {
    title: "Astigmatismo",
    subtitle: "Corrección y manejo visual avanzado",
    description: "El astigmatismo es una condición ocular común que ocurre cuando la córnea o el cristalino tienen una forma irregular, lo que provoca una visión borrosa o distorsionada tanto de cerca como de lejos. Esta condición puede corregirse con anteojos, lentes de contacto o cirugía refractiva.",
    iconSrc: "/img/service2.jpeg",
    details: [
      "Evaluación completa de la salud ocular mediante exámenes especializados.",
      "Prescripción de anteojos o lentes de contacto personalizados.",
      "Opciones de cirugía refractiva para corrección permanente.",
      "Seguimiento regular para ajustar tratamientos según sea necesario.",
    ],
  };

  const faqs = [
    {
      question: "¿Qué es el astigmatismo?",
      answer: "El astigmatismo es una condición en la que la córnea o el cristalino tienen una forma irregular, lo que provoca una visión borrosa o distorsionada tanto de cerca como de lejos.",
    },
    {
      question: "¿Cuáles son los síntomas del astigmatismo?",
      answer: "Los síntomas incluyen visión borrosa, dolor de cabeza, fatiga ocular, dificultad para ver de noche y necesidad de entrecerrar los ojos para enfocar mejor.",
    },
    {
      question: "¿Cómo se diagnostica el astigmatismo?",
      answer: "El diagnóstico se realiza mediante un examen ocular completo, que incluye pruebas de agudeza visual, queratometría y topografía corneal.",
    },
    {
      question: "¿Cómo se corrige el astigmatismo?",
      answer: "El astigmatismo puede corregirse con anteojos o lentes de contacto especiales. En algunos casos, también se puede optar por cirugía refractiva como LASIK o PRK.",
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
                  src="/img/service2.jpeg" // Actualiza la imagen si es necesario
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
              Video informativo sobre el astigmatismo
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-[269px] md:max-w-[400px] lg:max-w-[500px]">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F684890379320943%2F&show_text=false&width=269&t=0"
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
            <a href="https://api.whatsapp.com/send/?phone=5217222429505&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0" target="_blank">
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
