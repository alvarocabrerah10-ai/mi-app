import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Jorge Barrio</h3>
            <p className="text-slate-400 leading-relaxed">
              Electricista profesional con más de 15 años de experiencia.
              Calidad, confianza y profesionalidad en cada trabajo.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Información de Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400">Madrid, España</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-amber-400 flex-shrink-0" />
                <a href="tel:+34600000000" className="text-slate-400 hover:text-white transition-colors">
                  +34 600 000 000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:info@jorgebarrio.com" className="text-slate-400 hover:text-white transition-colors">
                  info@jorgebarrio.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horario de Atención</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-slate-400">
                  <p>Lunes - Viernes: 8:00 - 20:00</p>
                  <p>Sábados: 9:00 - 14:00</p>
                  <p className="mt-2 text-amber-400 font-semibold">
                    Emergencias 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Jorge Barrio Electricista y Telecomunicaciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
