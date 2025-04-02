import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";

export default function ServiceDetails() {
  const service = {
    title: "Miopía",
    subtitle: "Diagnóstico y tratamiento avanzado",
    description:
      "La miopía es un trastorno común de la visión en el que puedes ver con claridad los objetos cercanos, pero los objetos lejanos se ven borrosos. Ofrecemos exámenes de detección temprana, diagnósticos precisos y opciones de tratamiento personalizadas, incluyendo corrección con lentes, terapias y cirugías refractivas como el LASIK.",
    iconSrc: "/img/service3.jpeg",
    details: [
      "Exámenes de detección temprana para niños y adultos.",
      "Corrección visual con lentes de contacto o gafas.",
      "Cirugía refractiva con tecnología láser (LASIK).",
      "Seguimiento continuo para monitorear la progresión de la miopía.",
    ],
  };

  const faqs = [
    {
      question: "¿Qué es la miopía?",
      answer:
        "La miopía es un trastorno común de la visión en el que puedes ver con claridad los objetos cercanos, pero los objetos lejanos se ven borrosos. Puede manifestarse de forma repentina o relativamente rápida, y con frecuencia empeora durante la niñez o la adolescencia.",
    },
    {
      question: "¿Cómo se diagnostica la miopía?",
      answer:
        "Un examen ocular puede confirmar un diagnóstico de miopía. Los niños deben realizarse exámenes de detección a los 6 meses, a los 3 años, antes del primer grado y cada dos años durante los años escolares.",
    },
    {
      question: "¿Qué cirugía es más efectiva si tengo miopía?",
      answer:
        "La cirugía LASIK es la más común para tratar la miopía. Es una cirugía refractiva con láser que corrige el error de refracción en personas con poco alcance visual. También puede emplearse para otros errores de refracción.",
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
                  src="/img/service3.jpeg"
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-[#2D3339] mb-3">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600">{service.subtitle}</p>
              </div>
            </div>
          </header>

          {/* Descripción del servicio */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2D3339]">
              {service.subtitle}
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              {service.description}
            </p>
            <ul className="mt-6 list-disc pl-6 space-y-2">
              {service.details.map((detail, index) => (
                <li key={index} className="text-gray-600">{detail}</li>
              ))}
            </ul>
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

          {/* Botón de WhatsApp */}
          <section className="text-center">
            <a href="https://api.whatsapp.com/send/?phone=5217222429505&text=Hola+Dr.+encontr%C3%A9+su+sitio+web+y+me+gustar%C3%ADa+realizar+una+consulta&type=phone_number&app_absent=0">
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
