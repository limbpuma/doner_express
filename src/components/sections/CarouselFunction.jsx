import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const images = [
  '/img/showcase/doener_image_1.jpg',
  '/img/showcase/doener_image_2.jpg',
  '/img/showcase/doener_image_3.jpg',
  '/img/showcase/doener_image_4.jpg',
  '/img/showcase/doener_image_5.jpg',
  '/img/showcase/doener_image_6.jpg',
  '/img/showcase/doener_image_7.jpg',
  '/img/showcase/doener_image_8.jpg',
];

const CarouselFunction = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // Configura el auto-scroll
      const autoScroll = () => {
        emblaApi.scrollNext();
      };
      const interval = setInterval(autoScroll, 3000); // Cambia cada 3 segundos

      return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }
  }, [emblaApi]);

  return (
    <div className="relative mb-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative min-w-full sm:min-w-full md:min-w-1/2 lg:min-w-1/2 h-64"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-25"></div>
            </div>
          ))}
        </div>
      </div>
      {/* Efecto de degradado a los lados */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default CarouselFunction;
