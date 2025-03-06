import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const videos = [
  "https://www.facebook.com/reel/1106693053466320",
  "https://www.facebook.com/reel/911362013381758",
  "https://www.facebook.com/reel/1026649094979298",
  "https://www.facebook.com/reel/1500723367120538"
];

const VideoCarousel = () => {
  return (
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
  );
};

export default VideoCarousel;
