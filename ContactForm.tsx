import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Solicita tu Presupuesto
            </h2>
            <p className="text-xl text-slate-600">
              Sin compromiso. Te respondemos en menos de 24 horas
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
              <CheckCircle className="mx-auto mb-4 text-green-500" size={64} />
              <h3 className="text-2xl font-bold text-green-900 mb-2">¡Mensaje Enviado!</h3>
              <p className="text-green-700">
                Gracias por contactarnos. Te responderemos lo antes posible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-slate-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-semibold text-slate-700 mb-2">
                  Describe tu proyecto *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Enviar Solicitud
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
