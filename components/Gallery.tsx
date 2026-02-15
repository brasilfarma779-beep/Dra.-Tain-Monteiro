
import React, { useState, useEffect, useRef } from 'react';

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const photos = [
    { url: 'https://i.imgur.com/WvLf46Z.jpeg', title: 'Transformação de Sorriso 1' },
    { url: 'https://i.imgur.com/8Y8uxTZ.jpeg', title: 'Lentes de Contato Dental' },
    { url: 'https://i.imgur.com/AZr81ub.jpeg', title: 'Restauração Estética' },
    { url: 'https://i.imgur.com/8Y8uxTZ.jpeg', title: 'Clareamento & Estética' },
    { url: 'https://i.imgur.com/Ce8vyWf.jpeg', title: 'Estética Avançada' },
    { url: 'https://i.imgur.com/xFAVkLB.jpeg', title: 'Sorriso Renovado' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * currentIndex;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <span className="text-gold font-bold tracking-widest uppercase text-xs">Portfólio</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Resultados que Transformam</h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto italic text-sm md:text-base">
          "A arte de criar sorrisos harmônicos e saudáveis."
        </p>
        <div className="w-16 h-0.5 bg-gold mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Container mais compacto: max-w-2xl ou 3xl para não dominar a tela toda */}
      <div className="relative group max-w-2xl mx-auto px-4 md:px-0">
        {/* Carousel Container com proporção 4:5 (ideal para fotos de rosto/dentes) */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden snap-x snap-mandatory rounded-[30px] shadow-xl bg-white"
        >
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="min-w-full snap-center relative aspect-[4/5] overflow-hidden"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay mais sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6 md:p-8">
                <div className="text-white">
                  <span className="text-gold text-[10px] font-bold tracking-widest uppercase mb-1 block">Caso Clínico {index + 1}</span>
                  <h3 className="text-lg md:text-xl font-serif">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação menores e mais discretos */}
        <button 
          onClick={prevSlide}
          className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all z-10 hidden md:flex border border-gray-100"
        >
          <i className="fas fa-chevron-left text-sm"></i>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all z-10 hidden md:flex border border-gray-100"
        >
          <i className="fas fa-chevron-right text-sm"></i>
        </button>

        {/* Dots menores */}
        <div className="flex justify-center gap-1.5 mt-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-gold w-5' : 'bg-gray-300 hover:bg-gold/40'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Swipe Notice */}
      <p className="text-center text-gray-400 text-[10px] mt-4 md:hidden uppercase tracking-widest">
        <i className="fas fa-hand-pointer mr-1 opacity-50"></i> Deslize para ver detalhes
      </p>
    </div>
  );
};

export default Gallery;
