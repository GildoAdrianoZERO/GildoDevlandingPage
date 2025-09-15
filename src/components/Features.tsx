import featureAnalytics from '@/assets/feature-analytics.jpg';
import featurePlanning from '@/assets/feature-planning.jpg';
import featurePrototyping from '@/assets/feature-prototyping.jpg';
import featureIot from '@/assets/feature-iot.jpg';
import featureSupport from '@/assets/feature-support.jpg';
import featureLearning from '@/assets/feature-learning.jpg';

const Features = () => {
  const mainFeature = {
    title: 'Imersão & Estudo',
    description: 'Levanto requisitos e estudo o problema antes de propor soluções.',
    image: featureAnalytics
  };

  const features = [
    {
      title: 'Planejamento Estruturado',
      description: 'Defino etapas claras, ferramentas e tecnologias a serem aplicadas.',
      image: featurePlanning
    },
    {
      title: 'Prototipagem & Testes',
      description: 'Desenvolvo soluções em ambiente acadêmico ou prático, testando hipóteses.',
      image: featurePrototyping
    },
    {
      title: 'Aplicação Tecnológica',
      description: 'Uso conceitos de IoT, ciência de dados e desenvolvimento de sistemas para criar valor.',
      image: featureIot
    },
    {
      title: 'Suporte & Resolução de Problemas',
      description: 'Experiência prática em TI para garantir estabilidade e continuidade.',
      image: featureSupport
    },
    {
      title: 'Evolução Contínua',
      description: 'Estou sempre aprendendo e aplicando novos conhecimentos em projetos.',
      image: featureLearning
    }
  ];

  return (
    <section id="skills" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="heading-lg mb-8">Como Trabalho</h2>
          <p className="body-lg max-w-3xl mx-auto">
            Minha abordagem combina teoria acadêmica com experiência prática para entregar soluções eficientes
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="card-elevated mb-20 overflow-hidden animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-md mb-6">{mainFeature.title}</h3>
              <p className="body-lg">{mainFeature.description}</p>
            </div>
            <div className="relative">
              <img 
                src={mainFeature.image} 
                alt={mainFeature.title}
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-feature group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-8 overflow-hidden rounded-xl">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-56 object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="heading-sm mb-4">{feature.title}</h3>
              <p className="body-md">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;