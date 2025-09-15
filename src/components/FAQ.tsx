import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Qual é sua principal área de especialização?',
      answer: 'Minha formação é multidisciplinar, com foco em Análise e Desenvolvimento de Sistemas, IoT e Ciência de Dados. Tenho experiência tanto em desenvolvimento quanto em suporte de TI, o que me permite atuar em diferentes frentes da tecnologia.'
    },
    {
      question: 'Como você mantém suas habilidades atualizadas?',
      answer: 'Estou sempre estudando e aplicando novos conhecimentos. Atualmente curso Licenciatura em Computação e pós-graduação em IoT & Ciência de Dados. Além disso, mantenho contato constante com novas tecnologias através de projetos práticos e cursos online.'
    },
    {
      question: 'Você trabalha com projetos remotos?',
      answer: 'Sim, tenho experiência com trabalho remoto e colaboração em equipes distribuídas. Utilizo ferramentas modernas de comunicação e gestão de projetos para garantir a eficiência e qualidade do trabalho, independentemente da localização.'
    },
    {
      question: 'Qual é sua abordagem para resolver problemas complexos?',
      answer: 'Minha metodologia envolve primeiro uma imersão profunda no problema, levantamento de requisitos, planejamento estruturado das soluções, prototipagem e testes. Sempre busco aplicar as melhores práticas e tecnologias mais adequadas para cada situação específica.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="heading-lg mb-8">Perguntas Frequentes</h2>
          <p className="body-lg max-w-3xl mx-auto">
            Esclareça suas dúvidas sobre minha experiência e forma de trabalho
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="card-elevated animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-8 focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
              >
                <h3 className="heading-sm pr-8">{faq.question}</h3>
                <ChevronDown 
                  size={28} 
                  className={`text-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-8' : 'max-h-0'
              }`}>
                <div className="px-8">
                  <p className="body-md">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;