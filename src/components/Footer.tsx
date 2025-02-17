import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Doggos</h3>
            <p className="text-gray-400">
              Creando aventuras inolvidables para tu mejor amigo. Cuidado de calidad
              y diversión garantizada en un ambiente seguro y acogedor.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-amber-500">Inicio</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-amber-500">Nosotros</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-amber-500">Servicios</a></li>
              <li><a href="#testimonios" className="text-gray-400 hover:text-amber-500">Testimonios</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-amber-500">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 7:00 - 20:00</li>
              <li>Sábado: 8:00 - 18:00</li>
              <li>Domingo: 9:00 - 16:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            Hecho con <Heart className="w-4 h-4 mx-2 text-amber-500" /> por Doggos © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;