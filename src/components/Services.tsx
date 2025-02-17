import React from 'react';
import { Hotel, Sun, Scissors, GraduationCap } from 'lucide-react';
import { AbstractMountain, Dots } from './decorative/Shapes';

const services = [
  {
    icon: <Hotel className="w-10 h-10" />,
    title: 'Hotel Canino',
    description: 'Alojamiento de lujo con atención personalizada las 24 horas.',
    price: 'Desde $350/noche'
  },
  {
    icon: <Sun className="w-10 h-10" />,
    title: 'Guardería',
    description: 'Diversión y cuidado durante el día para tu mascota.',
    price: 'Desde $200/día'
  },
  {
    icon: <Scissors className="w-10 h-10" />,
    title: 'Grooming',
    description: 'Servicios profesionales de peluquería y estética canina.',
    price: 'Desde $250'
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: 'Entrenamiento',
    description: 'Programas personalizados de educación canina.',
    price: 'Desde $400/sesión'
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-secondary-light relative overflow-hidden">
      <AbstractMountain />
      <Dots />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-dark">
            Ofrecemos todo lo que tu mascota necesita para sentirse como en casa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 transition-transform hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-20 rounded-bl-full"></div>
              <div className="text-primary mb-4 transform hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-dark">{service.title}</h3>
              <p className="text-dark mb-4">{service.description}</p>
              <p className="text-primary font-semibold">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;