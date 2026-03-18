import { Phone, Mail, Clock } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Jorge Barrio</h1>
            <p className="text-lg md:text-xl text-amber-50">Electricista y Telecomunicaciones</p>
          </div>
          <div className="flex flex-col gap-2 text-sm md:text-base">
            <a href="tel:+34600000000" className="flex items-center gap-2 hover:text-amber-100 transition-colors">
              <Phone size={18} />
              <span>+34 600 000 000</span>
            </a>
            <a href="mailto:info@jorgebarrio.com" className="flex items-center gap-2 hover:text-amber-100 transition-colors">
              <Mail size={18} />
              <span>info@jorgebarrio.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>Lun - Vie: 8:00 - 20:00</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
