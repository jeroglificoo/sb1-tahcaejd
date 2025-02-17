import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    text: 'Mi Luna siempre regresa feliz y cansada de jugar. El personal es increíble y las instalaciones son perfectas.',
    rating: 5
  },
  {
    name: 'Carlos Rodríguez',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    text: 'La mejor decisión para mi Max. Se nota que aman a los perros y los cuidan como si fueran suyos.',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    text: 'Excelente servicio y atención. Mi Rocky no quiere irse cuando voy a recogerlo.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600">
            Historias de amigos peludos felices y sus humanos satisfechos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <div className="flex text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;