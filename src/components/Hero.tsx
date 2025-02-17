import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 lg:pt-0">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/src/components/sky-1283446_1280.jpg"
            alt="Beautiful sky background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark bg-opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6">
              <div className="mb-2">Rest Less.</div>
              <div className="text-accent">Explore More.</div>
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium tracking-wide">
              Cada día es una nueva aventura para descubrir con tu mejor amigo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-dark text-lg font-bold tracking-wide transition-all transform hover:scale-105">
                Reserva ahora
              </button>
              <button className="bg-accent text-dark border-2 border-accent px-8 py-4 rounded-full hover:bg-accent-dark text-lg font-bold tracking-wide transition-all transform hover:scale-105">
                Conoce nuestras instalaciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;