import Sidebar from "../components/Sidebar";

export default function ServiceDetails() {
  const service = {
    title: "Glaucoma",
    subtitle: "Tratamientos y manejo avanzado",
    description: "El glaucoma es una enfermedad ocular que puede dañar el nervio óptico y llevar a la pérdida de la visión. Ofrecemos diagnósticos precisos y tratamientos personalizados, incluyendo medicamentos, procedimientos láser y cirugía avanzada.",
    iconSrc: "/placeholder.svg",
    details: [
      "Diagnóstico temprano mediante pruebas especializadas.",
      "Tratamientos no invasivos con tecnología de punta.",
      "Seguimiento personalizado para evitar progresión de la enfermedad.",
      "Cirugías avanzadas para casos críticos.",
    ],
  };

  const faqs = [
    {
      question: "¿Qué es el glaucoma?",
      answer: "El glaucoma es una enfermedad ocular que afecta el nervio óptico, generalmente asociada con un aumento de la presión ocular. Puede llevar a la pérdida de la visión si no se trata.",
    },
    {
      question: "¿Cómo sé si tengo glaucoma?",
      answer: "Los síntomas iniciales son difíciles de detectar. Es importante realizar revisiones regulares para identificar cualquier anomalía en la presión ocular y el nervio óptico.",
    },
    {
      question: "¿Es el glaucoma curable?",
      answer: "El glaucoma no tiene cura, pero con un diagnóstico temprano y tratamiento adecuado, es posible controlar la enfermedad y prevenir la pérdida de visión.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="md:ml-[320px] p-4 md:p-12">
        <div className="max-w-4xl mx-auto">
          {/* Header mejorado */}
          {/* Nuevo diseño del encabezado */}
          <header className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                <img 
                  src="/img/serviceDetails.webp" 
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

          {/* Rest of the content remains the same */}
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

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2D3339] mb-4">
              Testimonios de pacientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Paciente A", "Paciente B"].map((name, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md"
                >
                  <p className="text-gray-700">
                    "Gracias al tratamiento para el glaucoma, mi visión se ha
                    estabilizado y mi calidad de vida ha mejorado."
                  </p>
                  <p className="mt-4 text-right text-gray-500 font-semibold">
                    - {name}
                  </p>
                </div>
              ))}
            </div>
          </section>

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

          <section className="text-center">
            <a href="https://api.whatsapp.com/send/?phone=5217222429505&text=Hola+Dr.+encontr%C3%A9+su+perfil+en+findoctor+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0">
              <button className="bg-[#2D3339] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#4A5568] transition">
                Agendar cita por WhatsApp
              </button>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
} 