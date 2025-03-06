import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
const videos = [
"  https://www.facebook.com/reel/1211440006137039",
"https://www.facebook.com/reel/712082156485104",
"https://www.facebook.com/reel/2445806978890436",
"https://www.facebook.com/reel/3474383282703101",
"https://www.facebook.com/reel/775397363753179",
"https://www.facebook.com/reel/2729937587143097",
"https://www.facebook.com/reel/480156900630149",
"https://www.facebook.com/reel/765901711347719",
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
          <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center border-2 border-[#2D3339]">
            <User className="h-10 w-10 text-[#2D3339]" />
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
      <div className="mt-8 bg-[#2D3339] p-6 rounded-lg text-center">
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
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-4">Galería de Videos</h2>
      <p className="text-center text-gray-600 mb-6">
        Explora nuestra colección de videos destacados.
      </p>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video)}&show_text=false`}
                width="400"
                height="700"
                className="rounded-lg shadow-lg"
                allowFullScreen
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>




    </section>
    </main>
    </div>
  );
}