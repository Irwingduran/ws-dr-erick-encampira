import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "María López",
    comment: "El Dr. Encampira es un excelente profesional. Mi operación fue un éxito total. ¡Recomendado!",
    image: "/img/maria.jpg",
  },
  {
    name: "Carlos García",
    comment: "Recibí un trato muy humano y profesional. Mi vista ha mejorado muchísimo. Gracias, doctor.",
    image: "/img/carlos.jpg",
  },
  {
    name: "Ana Martínez",
    comment: "El diagnóstico fue preciso y el tratamiento efectivo. El mejor oftalmólogo que he conocido.",
    image: "/img/ana.jpg",
  },
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
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
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-[#2D3339]"
          />
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
    </section>
  );
}
