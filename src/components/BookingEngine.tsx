import React, { useState } from 'react';
import { Calendar, Clock, Dog, CalendarCheck } from 'lucide-react';

type Service = 'hotel' | 'daycare';
type Pet = {
  name: string;
  breed: string;
  age: string;
  notes: string;
};

const BookingEngine = () => {
  const [service, setService] = useState<Service>('hotel');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pet, setPet] = useState<Pet>({
    name: '',
    breed: '',
    age: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the booking submission
    console.log({ service, startDate, endDate, pet });
    alert('¡Reserva recibida! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section id="reserva" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Reserva tu Espacio
          </h2>
          <p className="text-xl text-dark">
            Asegura el mejor cuidado para tu mascota
          </p>
        </div>

        <div className="bg-secondary-light rounded-2xl p-8 shadow-xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-bl-full -z-10"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-dark font-medium mb-2">Servicio</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setService('hotel')}
                      className={`p-4 rounded-lg flex flex-col items-center transition-all ${
                        service === 'hotel'
                          ? 'bg-primary text-white'
                          : 'bg-white text-dark hover:bg-primary/10'
                      }`}
                    >
                      <Calendar className="w-6 h-6 mb-2" />
                      <span>Hotel</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setService('daycare')}
                      className={`p-4 rounded-lg flex flex-col items-center transition-all ${
                        service === 'daycare'
                          ? 'bg-primary text-white'
                          : 'bg-white text-dark hover:bg-primary/10'
                      }`}
                    >
                      <Clock className="w-6 h-6 mb-2" />
                      <span>Guardería</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Fecha de Inicio
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full p-3 rounded-lg border border-secondary focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {service === 'hotel' && (
                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Fecha de Fin
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full p-3 rounded-lg border border-secondary focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-dark font-medium mb-2">
                    Nombre de la Mascota
                  </label>
                  <input
                    type="text"
                    value={pet.name}
                    onChange={(e) => setPet({ ...pet, name: e.target.value })}
                    className="w-full p-3 rounded-lg border border-secondary focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">Raza</label>
                  <input
                    type="text"
                    value={pet.breed}
                    onChange={(e) => setPet({ ...pet, breed: e.target.value })}
                    className="w-full p-3 rounded-lg border border-secondary focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">Edad</label>
                  <input
                    type="text"
                    value={pet.age}
                    onChange={(e) => setPet({ ...pet, age: e.target.value })}
                    className="w-full p-3 rounded-lg border border-secondary focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Notas Adicionales
                  </label>
                  <textarea
                    value={pet.notes}
                    onChange={(e) => setPet({ ...pet, notes: e.target.value })}
                    className="w-full p-3 rounded-lg border border-secondary focus:ring-2 focus:ring-primary h-24"
                    placeholder="Cuidados especiales, alergias, etc."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors flex items-center space-x-2"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Confirmar Reserva</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingEngine;