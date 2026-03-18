import {
  Lightbulb,
  Wifi,
  Home,
  Building2,
  Cable,
  Wrench,
  Camera,
  Phone
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Instalaciones Eléctricas',
    description: 'Instalación completa de sistemas eléctricos para viviendas y locales comerciales'
  },
  {
    icon: Wifi,
    title: 'Redes de Telecomunicaciones',
    description: 'Instalación de redes de datos, fibra óptica y sistemas de comunicación'
  },
  {
    icon: Home,
    title: 'Domótica',
    description: 'Automatización de hogar para mayor comodidad y eficiencia energética'
  },
  {
    icon: Building2,
    title: 'Instalaciones Industriales',
    description: 'Proyectos eléctricos para naves industriales y grandes superficies'
  },
  {
    icon: Cable,
    title: 'Cableado Estructurado',
    description: 'Diseño e instalación de infraestructura de cableado para empresas'
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    description: 'Revisiones periódicas y mantenimiento preventivo de instalaciones'
  },
  {
    icon: Camera,
    title: 'Video Vigilancia',
    description: 'Sistemas de seguridad con cámaras IP y videovigilancia profesional'
  },
  {
    icon: Phone,
    title: 'Telefonía',
    description: 'Instalación de centralitas y sistemas de telefonía empresarial'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Soluciones completas en electricidad y telecomunicaciones para particulares y empresas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-amber-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                <service.icon className="text-amber-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
