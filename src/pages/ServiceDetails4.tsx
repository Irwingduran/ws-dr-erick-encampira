import Sidebar from "../components/Sidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ScrollToTop from "../components/ScrollToTop";

export default function ServiceDetails() {
  const service = {
    title: "Cataratas",
    subtitle: "Detección y tratamiento avanzado",
    description:
      "Las cataratas se forman cuando las proteínas del cristalino del ojo se agrupan, causando que éste se nuble y afecte la visión. La mayoría de las cataratas se desarrollan lentamente, pero con el tiempo pueden interferir significativamente en la calidad de vida. Ofrecemos diagnósticos precisos y tratamientos modernos, incluyendo cirugía láser y facoemulsificación.",
    iconSrc: "/img/service4.jpeg",
    details: [
      "Examen de agudeza visual para evaluar la visión.",
      "Examen de retina y cristalino con tecnología avanzada.",
      "Técnicas modernas como la facoemulsificación y cirugía láser.",
      "Seguimiento personalizado para garantizar una recuperación óptima.",
    ],
  };

  const faqs = [
    {
      question: "¿Qué son las cataratas?",
      answer:
        "Las cataratas ocurren cuando el cristalino del ojo se nubla debido a la agrupación de proteínas, lo que afecta la visión. Es una condición común relacionada con el envejecimiento, pero también puede ser causada por otros factores como diabetes o traumatismos.",
    },
    {
      question: "¿Cómo se detectan las cataratas?",
      answer:
        "Se detectan mediante exámenes como la agudeza visual, examen de retina, lámpara de hendidura y tonometría. Estos estudios permiten un diagnóstico preciso del estado del cristalino.",
    },
    {
      question: "¿Cuáles son las opciones de tratamiento?",
      answer:
        "El tratamiento principal es la cirugía, que puede incluir facoemulsificación (ultrasonido para fragmentar la catarata) o cirugía láser (la técnica más moderna).",
    },
    {
      question: "¿Quiénes tienen mayor riesgo de desarrollar cataratas?",
      answer:
        "Personas con diabetes, hipertensión arterial, glaucoma, fumadores, alérgicos severos, o aquellos que han sufrido traumatismos oculares.",
    },
  ];

  // Lista de videos
  const videos = [
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F729198588823885%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1441547846540734%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F885899803350000%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1401147797361793%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F741381611023413%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1940160879670684%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F545198611059497%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1211440006137039%2F&show_text=false&width=267&t=0",
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F746311113303040%2F&show_text=false&width=267&t=0",
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
                  src="/img/service4.jpeg"
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

          {/* Carrusel de videos */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#2D3339] mb-6">
              Videos informativos sobre las cataratas
            </h2>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation // Habilita los botones de navegación
              pagination={{ clickable: true }} // Habilita la paginación
              spaceBetween={20} // Espacio entre los slides
              slidesPerView={1} // Número de slides visibles a la vez
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="rounded-lg overflow-hidden"
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <iframe
                    src={video}
                    width="100%"
                    height="500"
                    style={{ border: "none", overflow: "hidden" }}
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </SwiperSlide>
              ))}
            </Swiper>
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
