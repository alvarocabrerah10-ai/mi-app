import { Zap, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-amber-500 p-4 rounded-full">
              <Zap size={48} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones Eléctricas Profesionales
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Más de 15 años de experiencia en instalaciones eléctricas y telecomunicaciones.
            Servicio profesional, rápido y de confianza.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur">
              <Shield className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="text-lg font-semibold mb-2">Certificado y Asegurado</h3>
              <p className="text-slate-400">Todos nuestros trabajos cumplen normativa vigente</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur">
              <Clock className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="text-lg font-semibold mb-2">Servicio 24/7</h3>
              <p className="text-slate-400">Disponibles para emergencias cualquier día</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur">
              <Zap className="mx-auto mb-4 text-amber-400" size={40} />
              <h3 className="text-lg font-semibold mb-2">Respuesta Rápida</h3>
              <p className="text-slate-400">Presupuesto sin compromiso en 24 horas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
