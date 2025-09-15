import { Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Gildo Dev</h3>
            <p className="text-background/70">© 2025 Gildo Dev. Todos os direitos reservados.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/gildoadrianonorbertodasilva/" 
              target="_blank"
              className="text-background/70 hover:text-background transition-colors p-2 rounded-lg hover:bg-background/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.instagram.com/gildo.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank" 
              className="text-background/70 hover:text-background transition-colors p-2 rounded-lg hover:bg-background/10"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://wa.me/5581989349373?text=Oi!%20Vi%20seu%20portf%C3%B3lio%20e%20fiquei%20interessado%20em%20conversar%20sobre%20alguns%20projetos%20com%20voc%C3%AA."
              target="_blank" 
              className="text-background/70 hover:text-background transition-colors p-2 rounded-lg hover:bg-background/10"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#sobre" className="text-background/70 hover:text-background transition-colors">
              Sobre
            </a>
            <a href="#skills" className="text-background/70 hover:text-background transition-colors">
              Skills
            </a>
            <a href="#projetos" className="text-background/70 hover:text-background transition-colors">
              Projetos
            </a>
            <a href="#contato" className="text-background/70 hover:text-background transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;