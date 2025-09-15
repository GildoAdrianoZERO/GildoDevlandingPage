import { GraduationCap, Code, Target, TrendingUp, Layers, Heart } from 'lucide-react';

const WhyChoose = () => {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'Formação Multidisciplinar',
      description: 'ADS concluído, licenciatura em andamento e pós-graduação em IoT & Ciência de Dados.'
    },
    {
      icon: Code,
      title: 'Experiência Prática',
      description: '3 anos dedicados a projetos acadêmicos e 1 ano de atuação em Suporte de TI.'
    },
    {
      icon: Target,
      title: 'Foco em Soluções Reais',
      description: 'Aplicação de tecnologia para resolver problemas de forma eficiente e prática.'
    },
    {
      icon: TrendingUp,
      title: 'Evolução Contínua',
      description: 'Aprendizado constante em novas ferramentas, linguagens e tendências.'
    },
    {
      icon: Layers,
      title: 'Versatilidade',
      description: 'Atuação que vai do suporte técnico até projetos de inovação com IoT e dados.'
    },
    {
      icon: Heart,
      title: 'Compromisso & Dedicação',
      description: 'Entrego resultados com responsabilidade e atenção aos detalhes.'
    }
  ];

  return (
    <section className="py-32 gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="heading-lg mb-8">Por que me escolher?</h2>
          <p className="body-lg max-w-3xl mx-auto">
            Combinação única de formação acadêmica sólida e experiência prática em diferentes áreas da TI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="card-feature group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="heading-sm mb-3">{pillar.title}</h3>
                  <p className="body-md">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;