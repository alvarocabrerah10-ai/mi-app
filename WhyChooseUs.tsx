import { Award, Users, ThumbsUp, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: '15+ Años de Experiencia',
    description: 'Profesionales certificados con amplia trayectoria en el sector eléctrico y telecomunicaciones'
  },
  {
    icon: Users,
    title: '+500 Clientes Satisfechos',
    description: 'Particulares y empresas confían en nuestro servicio profesional y de calidad'
  },
  {
    icon: ThumbsUp,
    title: 'Garantía de Calidad',
    description: 'Todos nuestros trabajos incluyen garantía y certificación según normativa vigente'
  },
  {
    icon: TrendingUp,
    title: 'Tecnología Actual',
    description: 'Utilizamos las últimas tecnologías y materiales de primera calidad en cada proyecto'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Compromiso, calidad y profesionalidad en cada proyecto
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="bg-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <reason.icon size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
