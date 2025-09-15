import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black text-foreground">Gildo Dev</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              <a href="#sobre" className="btn-ghost text-lg">Quem eu sou</a>
              <a href="#skills" className="btn-ghost text-lg">Habilidades</a>
              <a href="http://github.com/GildoAdrianoZERO/" target="_blank" className="btn-ghost text-lg">Projetos</a>
              
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#contato" className="btn-primary text-lg py-3 px-8">
              Contato
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn-ghost p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
            <a href="#sobre" className="block btn-ghost w-full text-left">Quem eu sou</a>
            <a href="#skills" className="block btn-ghost w-full text-left">Skills</a>
            <a href="http://github.com/GildoAdrianoZERO/" target="_blank" className="block btn-ghost w-full text-left">Projetos</a>
            <a href="#contatos" className="block btn-ghost w-full text-left">Contatos</a>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;