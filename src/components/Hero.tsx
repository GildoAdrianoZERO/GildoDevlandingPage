import { ArrowRight, Download, Award } from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.jpg';

const Hero = () => {
  return (
    <section className="gradient-hero pt-32 pb-32 lg:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24">
          {/* Left Column - Content */}
          <div className=" animate-fade-in">
            {/* Achievement Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-base font-bold mb-12 border border-primary/20">
              <Award size={20} />
              3 anos em projetos acadêmicos • 1 ano de experiência em Suporte de TI
            </div>

            {/* Headlines */}
            <h1 className="heading-xl mb-8">
              Profissional de TI em evolução, conectando dados e tecnologia
            </h1>
            
            <h2 className="heading-md text-foreground mb-12">
              Transformando aprendizado em soluções reais na área de TI
            </h2>

            {/* Subheadline */}
            <p className="body-lg mb-16 max-w-2xl opacity-90">
              Sou formado em Análise e Desenvolvimento de Sistemas, cursando Licenciatura em Computação e pós-graduação em IoT e Ciência de Dados. Tenho 3 anos dedicados a projetos acadêmicos e 1 ano de experiência em Suporte de TI, sempre com foco em aplicar tecnologia para resolver desafios práticos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a href="http://github.com/GildoAdrianoZERO/" target="_blank" className="btn-primary group text-xl py-6 px-12">
                Ver Portfólio
                <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://docs.google.com/document/d/1nSMhiN4jPX83CyrLriGJtUzb1kPKJTfGTi4jhKB827g/edit?usp=sharing"  className="btn-secondary group text-xl py-6 px-12">
                <Download size={24} className="mr-3" />
                Baixar CV
              </a>
            </div>

            {/* Social Metrics */}
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8  border-t border-border">
              <div>
                <div className="text-3xl font-black text-primary mb-2">3+</div>
                <div className="text-base text-muted-foreground font-medium">Anos em projetos acadêmicos</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">1</div>
                <div className="text-base text-muted-foreground font-medium">Ano em Suporte de TI</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary mb-2">100%</div>
                <div className="text-base text-muted-foreground font-medium">Foco em evolução</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-20 scale-110"></div>
              <img 
                src={heroPortrait} 
                alt="Gildo Dev - Profissional de TI" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-[var(--shadow-large)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;