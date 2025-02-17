import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contáctanos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos aquí para responder todas tus preguntas y ayudarte a reservar
              la mejor experiencia para tu mascota.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-amber-600 mr-4" />
                <span className="text-gray-600">
                  Av. Principal 123, Ciudad de México
                </span>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-amber-600 mr-4" />
                <span className="text-gray-600">+52 (55) 1234-5678</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-amber-600 mr-4" />
                <span className="text-gray-600">contacto@doggos.mx</span>
              </div>

              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-amber-600 hover:text-amber-700">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-amber-600 hover:text-amber-700">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 h-32"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;