import React, { useEffect, useRef } from 'react';

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
  const carouselRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const startScroll = (e) => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const stopScroll = () => {
      isDown = false;
    };

    const moveScroll = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the scrolling speed
      carousel.scrollLeft = scrollLeft - walk;
    };

    const autoScroll = () => {
      if (carousel.scrollWidth - carousel.clientWidth <= carousel.scrollLeft) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: 1, behavior: 'smooth' });
      }
    };

    const setAutoScrollInterval = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }

      if (window.matchMedia("(min-width: 1024px)").matches) {
        // Desktop
        autoScrollIntervalRef.current = setInterval(autoScroll, 40);
      } else {
        // Mobile
        autoScrollIntervalRef.current = setInterval(autoScroll, 20);
      }
    };

    setAutoScrollInterval();
    window.addEventListener('resize', setAutoScrollInterval);

    carousel.addEventListener('mousedown', startScroll);
    carousel.addEventListener('mouseleave', stopScroll);
    carousel.addEventListener('mouseup', stopScroll);
    carousel.addEventListener('mousemove', moveScroll);

    return () => {
      clearInterval(autoScrollIntervalRef.current);
      window.removeEventListener('resize', setAutoScrollInterval);
      carousel.removeEventListener('mousedown', startScroll);
      carousel.removeEventListener('mouseleave', stopScroll);
      carousel.removeEventListener('mouseup', stopScroll);
      carousel.removeEventListener('mousemove', moveScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div 
        ref={carouselRef} 
        className="carousel flex overflow-x-scroll whitespace-nowrap scroll-smooth pb-20 relative"
      >
        {images.map((src, index) => (
          <div key={index} className="carousel-item inline-block relative h-64">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover pointer-events-none" />
            <div className="absolute inset-0 bg-black opacity-25"></div>
          </div>
        ))}
        {images.map((src, index) => (
          <div key={`duplicate-${index}`} className="carousel-item inline-block relative h-64">
            <img src={src} alt={`Duplicate Slide ${index + 1}`} className="w-full h-full object-cover pointer-events-none" />
            <div className="absolute inset-0 bg-black opacity-25"></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default CarouselFunction;
