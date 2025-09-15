const Credibility = () => {
  const partners = [
    { name: 'Análise e Desenvolvimento de Sistemas', type: 'Formação Completa' },
    { name: 'Licenciatura em Computação', type: 'Em Andamento' },
    { name: 'IoT & Ciência de Dados', type: 'Pós-Graduação' }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Formação sólida e em constante evolução
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="card-elevated text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-lg font-semibold text-foreground mb-2">
                {partner.name}
              </div>
              <div className="text-sm text-primary font-medium">
                {partner.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credibility;