export default function VideoSection() {
    return (
      <section className="mt-12rounded-lg shadow-lg p-6 md:p-10 text-center">
        <h2 className="text-2xl font-bold text-[#2D3339] mb-6">
          Aprende más sobre nuestro trabajo
        </h2>
        <p className="text-gray-700 mb-4">
          Descubre cómo cuidamos de tus ojos con profesionalismo y dedicación.
        </p>
        <div className="flex justify-center">
          <div className="relative w-[267px] h-[476px] border-4 border-[#2D3339] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F418113330589404%2F&show_text=false&width=267&t=0"
              width="267"
              height="476"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          *Video proporcionado por nuestras redes sociales.
        </p>
      </section>
    );
  }
  