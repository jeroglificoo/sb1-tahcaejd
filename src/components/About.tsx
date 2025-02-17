import React from 'react';
import { Heart, Shield, Sun } from 'lucide-react';
import { LeafPattern } from './decorative/Shapes';

const About = () => {
  return (
    <section id="nosotros" className="py-20 relative overflow-hidden">
      <LeafPattern />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-dark mb-8">
              Doggos nació de la pasión por crear un espacio donde las mascotas pudieran
              disfrutar de su propia aventura en un ambiente seguro y acogedor. Entendemos
              que cada perro es único y merece una atención personalizada que se adapte a
              sus necesidades específicas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-secondary p-6 rounded-full mb-4 shadow-lg transform hover:scale-105 transition-transform">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Cuidado Amoroso</h3>
                <p className="text-dark">Atención personalizada con amor y dedicación</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-secondary p-6 rounded-full mb-4 shadow-lg transform hover:scale-105 transition-transform">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Seguridad Total</h3>
                <p className="text-dark">Instalaciones seguras y monitoreadas 24/7</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-secondary p-6 rounded-full mb-4 shadow-lg transform hover:scale-105 transition-transform">
                  <Sun className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Diversión Garantizada</h3>
                <p className="text-dark">Actividades divertidas y estimulantes</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-accent opacity-15 -rotate-6 rounded-lg transform"></div>
            <img
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
              alt="Happy dog playing"
              className="rounded-lg shadow-lg relative z-10 transform hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
              alt="Dog being groomed"
              className="rounded-lg shadow-lg mt-8 relative z-10 transform hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;