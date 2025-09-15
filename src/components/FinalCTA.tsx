import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import appMockup from '@/assets/app-mockup.jpg';

const FinalCTA = () => {
  return (
    <section id="contato" className="py-32 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h2 className="heading-xl mb-8">
              Vamos Construir Soluções Juntos!
            </h2>
            
            <h3 className="heading-md text-foreground mb-12">
              Pronto para Conhecer Meus Projetos?
            </h3>

            <p className="body-lg mb-16 opacity-90">
              Estou sempre disponível para novos desafios e oportunidades de colaboração. 
              Vamos conversar sobre como posso contribuir com seus projetos de tecnologia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a 
                href="http://github.com/GildoAdrianoZERO/" 
                target="_blank"
                className="btn-primary group text-xl py-6 px-12"
              >
                Ver Meus Projetos
                <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/5581989349373?text=Oi!%20Vi%20seu%20portf%C3%B3lio%20e%20fiquei%20interessado%20em%20conversar%20sobre%20alguns%20projetos%20com%20voc%C3%AA."
                target="_blank" 
                className="btn-secondary group text-xl py-6 px-12"
              >
                <MessageCircle size={24} className="mr-3" />
                Enviar Mensagem
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-border">
              <div>
                <div className="text-base text-muted-foreground mb-2 font-medium">Instagram</div>
                <div className="font-bold text-foreground text-lg"><a href='https://www.instagram.com/gildo.dev/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#' target='_black'>Gildo.dev</a></div>
              </div>
              <div>
                <div className="text-base text-muted-foreground mb-2 font-medium">Localização</div>
                <div className="font-bold text-foreground text-lg">Brasil</div>
              </div>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-20 scale-110"></div>
              <img 
                src={appMockup} 
                alt="Portfolio Preview" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-[var(--shadow-large)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;