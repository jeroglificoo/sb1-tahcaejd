import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg className="h-8" viewBox="0 0 200 50" fill="none">
      <text
        x="10"
        y="35"
        className="font-bold"
        style={{
          fill: '#656B2D',
          fontSize: '40px',
          fontWeight: 'bold',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '0.1em'
        }}
      >
        DOGGOS
      </text>
    </svg>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-dark hover:text-primary">Inicio</a>
            <a href="#nosotros" className="text-dark hover:text-primary">Nosotros</a>
            <a href="#servicios" className="text-dark hover:text-primary">Servicios</a>
            <a href="#reserva" className="text-dark hover:text-primary">Reservar</a>
            <a href="#testimonios" className="text-dark hover:text-primary">Testimonios</a>
            <a href="#contacto" className="text-dark hover:text-primary">Contacto</a>
            <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark">
              Reserva Ahora
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-dark hover:text-primary">Inicio</a>
            <a href="#nosotros" className="block px-3 py-2 text-dark hover:text-primary">Nosotros</a>
            <a href="#servicios" className="block px-3 py-2 text-dark hover:text-primary">Servicios</a>
            <a href="#reserva" className="block px-3 py-2 text-dark hover:text-primary">Reservar</a>
            <a href="#testimonios" className="block px-3 py-2 text-dark hover:text-primary">Testimonios</a>
            <a href="#contacto" className="block px-3 py-2 text-dark hover:text-primary">Contacto</a>
            <button className="w-full bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark mt-4">
              Reserva Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;